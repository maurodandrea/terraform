variable "aws_region" {
  type        = string
  description = "AWS region to create resources. Default Milan"
  default     = "eu-south-1"  
}

variable "environment" {
  type        = string
  description = "Environment"
  default     = "production" ##### VALORE DI TEST
}

variable "github_repository" {
  type        = string
  description = "The repository where the IaC workflows will run"
  default     = "repo" ##### VALORE DI TEST
}

variable "tags" {
  type = map(any)
  default = {
    CreatedBy = "Terraform"
  }
}

# FARGATE ECS CONTAINER ##########################################################
variable "app_port" {
  default = 1337    ##### VALORE DI DEFAULT APP STRAPI
}

variable "health_check_path" { ##### Path da monitorare da parte dell' Application Load Balancer ECS
  default = "/"
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024"           ##### VALORE DI TEST
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "2048"           ##### VALORE DI TEST
}

# DATABASE RDS ##########################################################
variable "rds_cluster_password" {
  description = "RDS cluster password"
  sensitive   = true
  type        = string
  default     = "adminpassword"  ##### VALORE DI TEST
}

# BUCKET S3 ##########################################################
variable "asset_bucket_name" {
  type    = string
  default = "media-library-s3-strapi-713024823233" #####VALORE DI TEST
}

variable "file_env" {
  type    = string
  default = "arn:aws:s3:::media-library-s3-strapi-713024823233/.env" #####VALORE DI TEST
}

# APP STRAPI ##########################################################
variable "strapi_admin_jwt_secret" {
  description = "Strapi Admin JWT Secret"
  sensitive   = true
  type        = string
  default     = "admin" #####VALORE DI TEST
}

variable "product_name" {
  description = "Product"
  default     = "b2b-portals-strapi" ##### VALORE DI TEST
}

# GITHUB ##########################################################  DA VERIFICARE SE NECESSARIO
variable "github_token" {
  description = "github_token"
  sensitive   = true
  type        = string
  default     = "github" ##### VALORE DI TEST
}

variable "account_id" {
  description = "Account"
  default     = "713024823233" ##### VALORE DI TEST
}

##variable "environment_files" { 
##  description = "environment_files strapi"
 ## sensitive   = true
 ## type        = string
 ## default     = "media-library-s3-strapi-713024823233/.env"      ## #####VALORE DI TEST  asset_bucket_name
##}


