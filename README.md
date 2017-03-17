# Fuzzy-spoon
Sources of charlottethomas.fr website (currently in development)

*Yes this is a github's generated repo name*

---

## Some commands workflow
### Install en develop
	npm install
	hexo serve --debug

### Build and deploy to integration
	hexo generate
	git commit -am 'generate new version'
	git push
	git subtree push --prefix public/ origin gh-pages

*After doing that, an new integration version should be available [here](https://crucialhawg.github.io/fuzzy-spoon/)*

### Bach resize images
	cd <path to images folder>
	mogrify -path <path to resized images folder> -resize <max-width> *.jpg

---

## Roadmap
### Now
- [x] Menu-desktop integration.
- [x] Menu-mobile integration.
	- [x] css toggle
- [x]	Handle inclusion of **works** (*as 'oeuvres'*) in page
	- [x]	Work's multiple images
	- [x]	Work's predefined layouts
- [x] Add home
- [ ] Global style reset
	- [ ] change base colors
	- [ ] remove button hilights
- [ ] Add Js ramda utils (for templating and client code)
- [ ]	Implement ZoomBox feature
- [ ]	Add show nav on scroll up
- [ ] Contact form with mailgun/sendgrid/mailchimp integration
- [ ] Copy articles from old site
	- [x]	Get images
	- [ ] Order and rename images
	- [ ] Resize images that need it
	- [ ] Include content

### Later
- [ ] Improve build-deploy-integ workflow (with tagging and shit)
- [ ] Add build-deploy-prod workflow (try a node script for this)
	- [ ] CNAME
	- [ ] dynamic yaml config (url, root...)
- [ ] Investigate submodule workflow
- [ ] Reorganize git repos
- [ ] Put theme in git submodule

### Far down the road
- [ ] Develop deployment express api
- [ ] Develop cms backoffice, integrated with api
- [ ] Implement resize and upload images (with forced predefined ration for some cases)
