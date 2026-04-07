terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "bookstore-terraform-state-316759592209"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source       = "./modules/vpc"
  cluster_name = var.cluster_name
  environment  = var.environment
}

module "ecr" {
  source      = "./modules/ecr"
  environment = var.environment
}

module "eks" {
  source       = "./modules/eks"
  cluster_name = var.cluster_name
  environment  = var.environment
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
}