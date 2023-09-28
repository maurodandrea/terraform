terraform {
  required_version = "1.5.6"

  ###backend "s3" {}

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.16.2"
    }
  }
}

provider "aws" {
  region = var.aws_region
  default_tags {
    tags = var.tags
  }
}

# Init IaC resources ####################### DA DECOMMENTARE ###################################
###module "identity" {
###  source            = "./identity"
###  github_repository = var.github_repository
###}