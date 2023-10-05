resource "random_string" "random" {
  length  = 6
  special = false
  upper   = false
}

resource "aws_db_subnet_group" "website-cms" {
  name       = var.product_name
  subnet_ids = aws_subnet.website-cms-private.*.id

  tags = {
    Name       = var.product_name
    CostCenter = var.product_name
  }
}

resource "aws_rds_cluster" "website-cms-database-cluster" {
  cluster_identifier = "website-cms-database-cluster"
  engine             = "aurora-postgresql"
  engine_mode        = "provisioned"
  engine_version     = "14.6"
  database_name      = "strapidb"
  master_username    = "postgres"
  master_password    = aws_ssm_parameter.db_password.value
  skip_final_snapshot = true
  ### manage_master_user_password = true  ###IN ALTERNATIVA ALLA RIGA PRECEDENTE
  vpc_security_group_ids = [aws_security_group.website-cms-database.id]
  db_subnet_group_name = aws_db_subnet_group.website-cms.name

  serverlessv2_scaling_configuration {
    max_capacity = 1.0
    min_capacity = 0.5
  }
}

resource "aws_rds_cluster_instance" "website-cms-database-instance" {
  cluster_identifier = aws_rds_cluster.website-cms-database-cluster.id
  instance_class     = "db.serverless"
  engine             = aws_rds_cluster.website-cms-database-cluster.engine
  engine_version     = aws_rds_cluster.website-cms-database-cluster.engine_version
  db_subnet_group_name = aws_db_subnet_group.website-cms.name
 
 ## vpc_security_group_ids = [
 ##   aws_security_group.website-cms-database.id
 ## ]

}