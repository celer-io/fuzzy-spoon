# Fuzzy-spoon
Sources of charlottethomas.fr website (currently in development)

*Yes this is a github's generated repo name*

---

## Some commands workflow
### Install en develop
`npm install`  
`hexo serve --debug`  

### Build and deploy to integration
`hexo generate`  
`git commit -m 'generate new version'`  
`git push`  
`git subtree push --prefix public/ origin gh-pages`  

*After doing that, an new integration version should be available [here](https://crucialhawg.github.io/fuzzy-spoon/)*

---

## Roadmap
### Now
- [ ] Menu-desktop integration.
- [ ] Menu-mobile integration.
	- [X] css toggle
- [X]	Handle inclusion of **works** (*as 'oeuvres'*) in page
	- [X]	Work's multiple images
	- [X]	Work's predefined layouts
- [ ] Global style reset
- [ ] Add Js ramda utils (for templating and client code)
- [ ]	Implement ZoomBox feature
- [ ]	Add show nav on scroll up

### Later
- [ ] Improve build-deploy-integ workflow (with tagging and shit)
- [ ] Add build-deploy-prod workflow
	- [ ] CNAME
	- [ ] dynamic yaml config (url, root...)
- [ ] Investigate submodule workflow
- [ ] Reorganize git repos
- [ ] Put theme in git submodule ??

### Far down the road
- [ ] Develop deploy to integ/prod express api
- [ ] Develop cms backoffice, integrated with api
