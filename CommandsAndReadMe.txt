Commands:

-npx create-next-app workops_frontend --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
-Steps to Create/initialize Git Repo:
	1)git config --global user.name {username}  OR git config --local user.name {username}
	2)git config --global user.email {email} OR 
 git config --local user.email {email}
	3)git init
        4)Create Repo on github account
	5)git remote add origin https://github.com/Sunil-1998/workops_frontend.git
If while Cloning/Pushing you are getting error of 'Repository not Found',then Open Control Panel from the Start menu.
Select User Accounts.
Select the "Credential Manager".
Click on "Manage Windows Credentials".
Delete any credentials related to Git or GitHub.
Once you deleted all then try to clone again.

Extra:- To change origin ,git remote set-url origin newRepoUrl ,where newRepoUrl=https://github.com/{userName}/{repoName}.git