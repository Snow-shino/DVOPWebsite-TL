Taylor Lundean
Demonstration of deploying website to github pages.




# Old:

# Workflow for DVOP Assignment: 
## "Github Repository for your AI Website"

### Steps Taken:
- Ensured git was installed on local machine
- Initialized Git repo - git init
- git config --global username "Taylor Lundean"
- git config --global user.email. "tlundean@gmail.com"
- git add .
- git commit -m "Initial commit of website files"

- Created Repo in github "DVOPWebsite-TL"
- Linked Repo: git remote add origin https://github.com/Snow-shino/DVOPWebsite-TL.git
- git push -u origin master
- Verified files populated in repository

### Set up and deployed pages in github:
- https://snow-shino.github.io/DVOPWebsite-TL/

### Notes:

- No challenges were encountered in this assignment.
- I am very familiar with github and had no notable issues or steps taken other than steps presented above.

---

# New: GitHub Actions Deployment

## Assignment: Using GitHub Actions to Deploy to GitHub Pages

### Steps Taken:

#### Part 1: Disable Automatic GitHub Pages Publishing
- Navigated to the repository **Settings** > **Pages**
- Changed the **Source** from "Deploy from a branch" to **GitHub Actions**

#### Part 2: Set Up GitHub Actions Workflow
- Created the directory `.github/workflows/` in the root of the repository
- Created the file `.github/workflows/deploy.yml` with the provided workflow content
- The workflow uses the `master` branch (the default branch for this repository) as the trigger

#### Part 3: Configure GitHub Pages to Use GitHub Actions
- In **Settings** > **Pages**, confirmed **Source** is set to **GitHub Actions**

#### Part 4: Commit and Push Changes
```bash
git add .
git commit -m "Set up GitHub Actions for deployment"
git push origin master
```

- Monitored the workflow under the **Actions** tab to confirm it ran without errors
- Verified the site is live at: https://snow-shino.github.io/DVOPWebsite-TL/

### How to Trigger Deployment
- **Automatic:** Push any changes to the `master` branch — the workflow runs automatically.
- **Manual:** Go to the **Actions** tab in GitHub, select "Deploy static content to Pages", and click **Run workflow**.

### Challenges Faced
- No significant challenges were encountered. The branch name in the workflow was already set to `master`, matching this repository's default branch, so no modifications were needed.

### Workflow Overview
The `deploy.yml` workflow:
1. Triggers on pushes to `master` or manual dispatch
2. Checks out the repository code
3. Configures the GitHub Pages environment
4. Uploads the repository contents as a deployment artifact
5. Deploys the artifact to GitHub Pages
