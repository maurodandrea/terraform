resource "aws_ecr_repository" "image-repository" {
  name = "strapi-website"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "policy" {
  repository = aws_ecr_repository.image-repository.name

  policy = <<EOF
  {
      "rules": [
          {
              "rulePriority": 1,
              "description": "Keep last 5 images",
              "selection": {
                  "tagStatus": "tagged",
                  "tagPrefixList": ["v"],
                  "countType": "imageCountMoreThan",
                  "countNumber": 5
              },
              "action": {
                  "type": "expire"
              }
          }
      ]
  }
  EOF
}

##provider "aws" {
 ## alias  = "us_east_1"
 ## region = "us-east-1"
##}

##resource "aws_ecrpublic_repository" "repo" {
  ##provider = aws.us_east_1
  ##repository_name = "public-strapi-website/cms"
  ##}
