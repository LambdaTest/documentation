---
id: hyperexecute-private-cloud-setup-with-aws
title: How to setup HyperExecute Private Cloud with AWS
hide_title: false
sidebar_label: Setup with AWS
description: This documentation will help you setup HyperExecute Private Cloud with AWS.
keywords:
- hyperexecute aws
- hyperexecute private cloud
- hyperexecute private cloud aws
url: https://www.testmuai.com/support/docs/hyperexecute-private-cloud-setup-with-aws/
site_name: LambdaTest
slug: hyperexecute-private-cloud-setup-with-aws/
canonical: https://www.testmuai.com/support/docs/hyperexecute-private-cloud-setup-with-aws/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Private Cloud",
          "item": `${BRAND_URL}/support/docs/hyperexecute-private-cloud-setup-with-aws/`
        }]
      })
    }}
></script>

## Prerequisites

Before deploying the CloudFormation template for HyperExecute through the AWS Marketplace, ensure that the following prerequisites are met:

1. **Region with min 3 availability zones**: Make sure you are running the CloudFormation in a region that supports a minimum of 3 availability zones. The currently supported regions are `us-east-1`, `us-east-2`, `us-west-2`, `eu-central-1`, `ap-south-1`, and `ap-southeast-2`.

2. **Elastic IPs (EIPs)**: HyperExecute requires 3 Elastic IPs for each availability zone (AZ). Ensure that you have sufficient quota for EIPs in your AWS account. You can refer to the [EIP Limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-limit) to check your quota.

3. **EC2 quota limits**: The CloudFormation template will create EC2 instances as part of a Managed NodeGroup, with a minimum requirement of 5 nodes, and an Auto Scaling Group with a maximum size based on your concurrency license. Make sure to increase your [EC2 quota](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html) limits accordingly.

## Steps to Deploy

To deploy the CloudFormation template on AWS, follow these steps:

**Step 1:** Download the CloudFormation template named **hyperexecute_deployment.yaml** from the AWS Marketplace.

**Step 2:** Navigate to the AWS CloudFormation console and choose **Create Stack** .

**Step 3:** On the **Create Stack** page, select the option **Template is ready** and click on the **Upload a template file" option**.

**Step 4:** Browse for the main template file **hyperexecute_deployment.yaml** and click **Next**.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/aws/Step1.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>

**Step 5:** On the **Specify Stack details** page, provide a name for the stack (deployment) and provide the necessary configuration details. Refer to the configuration parameters details sections for guidance.

**Step 6:** On the next page, under the **Configure stack** option, change the **Stack failure options** to preserve the successfully provisioned resources. This helps in preserving the created resources and troubleshooting issues in case of a stack failure.

**Step 7:** Click **Next** to review all the details, and then initiate the launch to deploy the HyperExecute CloudFormation stack.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/aws/Step3.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>

By following these steps, you can deploy the HyperExecute CloudFormation template from the AWS Marketplace and set up the required infrastructure for your testing needs.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/aws/Step2.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>

## Configuration Parameters

Please provide the following configuration details based on the type of installation you want to perform:

### User Details

In the User Details section, provide the following details as required:

| Parameter    | Description                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------|
| EmailID      | Your valid email ID to set up a <BrandName /> account. If you already have a <BrandName /> Account, you can specify that email ID. |
| ManagedAppName | Provide a unique ManagedAppName to be used for the application environment in the cluster. It must be between 5 to 20 characters long and can only contain lowercase letters. |

### VPC Configuration

In the VPC Configuration, provide the following details as required:

| Parameter        | Description                                                                                                              |
|------------------|--------------------------------------------------------------------------------------------------------------------------|
| VpcCidr          | The VPC CIDR block. Must be a valid IP CIDR range of the form x.x.x.x/x. Default Value: 10.10.0.0/16                       |
| AvailabilityZones | List of Availability Zones to use for the subnets in the VPC. You must select three Availability Zones in the specified order. |

### EKS Configuration

In the EKS Configuration, provide the following details as required:

| Parameter                  | Description                                                                                                   |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
| ManagedNodeGroupInstanceType | Specify the instance types for a node group. Default Value: m5.xlarge                                           |
| SpotNodes                   | Enable Spot Nodes for the EKS cluster. Default Value: No                                                      |
| IngressLBType               | Type of Ingress Load Balancer to create for the EKS Cluster. Private Load Balancer will only be accessible within the VPC. |

### VMS Autoscaling Group

In the VMS Autoscaling Group, provide the following details as required:

| Parameter     | Description                                                                                                |
|---------------|------------------------------------------------------------------------------------------------------------|
| VMInstanceType | Specify the instance types for an EC2 Auto Scaling Group.                                                    |
| SpotVMs       | Enable Spot EC2 instances for the Auto Scaling Group. Default Value: No                                     |
| KeyPairName   | Name of an existing EC2 key pair for SSH access to the instances in the Auto Scaling Group.                  |

### Other Configuration

In the Other Configuration, provide the following details as required:

| Parameter          | Description                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------|
| RedisClusterNodeType | The ElasticCache node type. Default value: cache.t3.small                                                      |
| DebugMode          | Enable debug mode for your environment to run preview images in your EKS cluster. Default Value: No           |
| WindowsJumpHost    | Enable a Windows jump host for accessing your Windows machines in your Auto Scaling Group. Default Value: No   |

## Accessing HyperExecute after deployment

Once the CloudFormation template is successfully deployed, you can access HyperExecute and perform the following steps:

**Step 1:** Login into the EC2 instance named "**HyperExecute-Admin-Bastion**" using either SSM (Session Manager) or the SSH key provided in the Configuration Parameters. Note that SSH access is allowed by default within the VPC.

**Step 2:** Log in to the AWS environment and access the Kubernetes cluster by running the following command on AWS CLI:

   ```bash
   aws eks --region <region_name> update-kubeconfig --name <cluster_name>
   ```

   Replace `<region_name>` with the appropriate region and `<cluster_name>` with the name of your cluster.

**Step 3:** Execute the command:

   ```bash
   kubectl get namespaces
   ```

   This command will provide a list of namespaces created.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/aws/namespace_output.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>

**Step 4:** Execute the command:

   ```bash
   kubectl get po -n hyperexecute
   ```

   This command will provide a list of pods created under the `hyperexecute` namespace.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/aws/list_pods.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>

**Step 5:** Access the Private Cloud deployment using the provided [link](https://dashboard.hyperexecute.cloud/).

**Step 6:** If the emailID you used to setup this deployment is not an existing user on <BrandName /> then check your Email, there should be a email titled `Create Password - LambdaTest`, generate a new password using the link provided in the email.

**Step 7:** Login using your email and password and run jobs using the HyperExecute CLI. For further details about HyperExecute, refer to the [documentation](/support/docs/getting-started-with-hyperexecute/).

## Cleanup the Environment

If you wish to clean up the resources created during the deployment, follow these steps:

**Step 1 :** Ensure that the objects inside the S3 bucket created by the CloudFormation template with the name `${AWS::StackName}-${AWS::AccountId}-hyperexecute-bucket` are deleted before the bucket can be deleted.

**Step 2 :** Delete the images in the ECR (Elastic Container Registry) repository with the name `${ManagedAppName}-hyperexecute-private-cloud` before deleting the repository.

**Step 3 :** Delete the root stack from CloudFormation. This will delete all the nested stacks and their resources.

**Step 4 :** CloudWatch log groups are not deleted by default. Manually navigate to CloudWatch and delete the log groups starting with the following regex patterns:
   - `/aws/lambda/*-ClusterCreatorFunction-*`
   - `/aws/lambda/*-ClusterOIDCURLFunction-*`
   - `/aws/lambda/*-HyePrivateCloudFunction-*`
   - `/aws/containerinsights/${ManagedAppName}-hyperexecute-eks-cluster/*`

**Step 5 :** If you have used the secrets feature in HyperExecute, the secrets with the regex pattern `hyperexecute-secrets-*` will not be deleted. Manually navigate to AWS Secret Manager and delete the secrets.

Make sure to follow these cleanup steps to remove the resources associated with the HyperExecute deployment.
