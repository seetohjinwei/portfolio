# Angular Deployment Help

Written for future me and anyone else who needs help deploying an Angular application to Github Pages.

## Setup

Do this before your first deploy.

1. In `angular.json`, change projects/portfolio/architect/build/options/outputPath to docs.
2. Add an empty .nojekyll file in root of the project, only needed if project has files starting with underscore. [Blog post](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) on Github about it.
3. In the Github Pages settings of your Github repository, change "branch" to the branch you want to deploy from and change "source" to /docs folder.

## Update

Do this for all deployments (including the initial deployment).

```bash
# replace the link with your own website
ng build --base-href "https://seetohjinwei.github.io/portfolio/"
cp docs/index.html docs/404.html
```

## References

1. https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879
2. https://dzone.com/articles/deploy-angular-app-on-github-pages
