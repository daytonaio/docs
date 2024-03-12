---
title: Appearance
description: Learn the 'White Label' options for your Daytona Instance.
sidebar:
  label: Appearance
---
Daytona has the ability to provide White Labeling as per company requirements. This means that you can add your own ‘look and feel’/company branding, presenting a unified environment and giving users a more seamless experience across your other internal tools.

To begin, you will need to have the following prerequisites:
<br>
<br>
- An ‘active’ Daytona License
- A ‘White Label’ license - if you have not already done so, you will need to reach out to our Sales Team. 
 

<br>
To White Label Daytona, first, you need to create a container image which holds the required branded assets.
<br>
<br>
To create the required image, you will need to create the directory and file structure.




- Then create a container image from the Dockerfile content provided below:




```
COPY branding/dashboard /branding/dashboard/
COPY branding/workspace-status /branding/workspace-status/
COPY branding/workspace-proxy/ /branding/workspace-proxy/
COPY branding/email-service/ /branding/email-service


```





- Push the image into a public or private registry. You will now have a branding image prepared to be used within your Daytona instance.





:::note
To White Label your installation, please contact your sales representative to add White Labeling as a term of your license. White Labeling Daytona without written approval from us is prohibited by our License Agreement..
 :::