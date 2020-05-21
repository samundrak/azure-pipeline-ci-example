# Azure Pipeline CI to deploy React APP in DigitalOcean

This is simple repo to actually deploy small react app hosted in Azure Repos, build in Azure Pipeline and Released to Digital
ocean.

To make this work I will be using pipeline task CopyFileOverSSH which can found in pipeline assistant but before
that you need to generate ssh key in your local machine and add it in `authorized_keys` in target server where it will be deployed.


# Steps to deploy
- Generate a SSH key `ssh-keygen -t rsa -m PEM -b 4096 -C "samundrak@yahoo.com"`
- Put the public one in `authorized_keys` file of target server
- Create a [SSH connection](https://dev.azure.com/140166/140166/_settings/adminservices) by clicking new connection and selecting SSH from the list
- In the drawer enter your server IP address, private key and connection name and create a connection
- Go to pipeline and add tasks/scripts for reference see `azure-pipeline.yml` in this repo
 
