resource "aws_ecs_cluster" "website-cms-cluster" {
  name = "strapi-website-ecs-cluster"
}

data "template_file" "cms_app" {
  template = file("./task-definitions/cms_app.json.tpl")

  vars = {
    image          = aws_ecr_repository.image-repository.repository_url
    ##image          = aws_ecrpublic_repository.repo.repository_uri
    fargate_cpu    = var.fargate_cpu
    fargate_memory = var.fargate_memory
    aws_region     = "eu-south-1"
    db_host              = aws_rds_cluster.website-cms-database-cluster.endpoint
    db_user              = "postgres"
    db_password_arn      = aws_ssm_parameter.db_password.arn
    bucket_name = var.asset_bucket_name
    github_token_arn     = aws_ssm_parameter.github_token.arn
    admin_jwt_secret_arn = aws_ssm_parameter.admin_jwt_secret.arn
  }
}

resource "aws_ecs_task_definition" "cds-website-cms" {
  family = "website-cms-task"
  execution_role_arn       = aws_iam_role.ecs-task-execution-role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.cms_app.rendered
}

resource "aws_ecs_service" "website-cms-ecs" {
  name            = "strapi-website-ecs"
  cluster         = "strapi-website-ecs-cluster"
  desired_count   = 1
  launch_type     = "FARGATE"
  force_new_deployment = true
  task_definition = aws_ecs_task_definition.cds-website-cms.arn

  network_configuration {
  security_groups  = [aws_security_group.ecs_tasks.id]
  subnets          = aws_subnet.website-cms-private.*.id
  assign_public_ip = true
  }

  load_balancer {
   target_group_arn = aws_alb_target_group.app.id
   container_name   = "cds-website-cms"
   container_port   = var.app_port
  }
}
