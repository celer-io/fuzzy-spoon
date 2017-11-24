# Fuzzy-spoon
Sources of charlottethomas.fr website (currently in development)

*Yes this is a github's generated repo name*

---

## Some commands workflow
### Install en develop
	npm install
	cd theme/slow
	npm install
	cd ../.. 			// TODO: Investigate git sumbodules workflow
	hexo serve --debug


### Build and deploy to integration
	hexo clean
	hexo generate
	echo demo.charlottethomas.fr > public/CNAME
	git aa
	git commit -am 'generate new integration version'
	git push
	git push origin `git subtree split --prefix public master`:gh-pages --force
	*After doing that, new integration version should be available [here](https://demo.charlottethomas.fr/)*

### Deploy to prod
	hexo clean
	hexo generate
	echo charlottethomas.fr > public/CNAME
	git commit -am 'generate new prod version'
	git tag <version> // TODO
	git push
	git push git@github.com:charlottethomas/charlottethomas.github.io.git `git subtree split --prefix public master`:master ?(--force)

	*After doing new prod version should be available [here](https://charlottethomas.fr/)*


### Bach resize images
	`cd <path to images folder>`
	`mogrify -path <path to resized images folder> -resize <max-width> *.jpg`

### Compress images
	`convert -strip -interlace Plane -quality 85% et-terre_1.jpg et-terre_1_min.jpg`

---

## Roadmap
### Now
- [x] Menu-desktop integration.
- [x] Menu-mobile integration.
	- [x] css toggle
- [x]	Handle inclusion of **works** (*as 'oeuvres'*) in page
	- [x]	Work's multiple images
	- [x]	Work's predefined layouts
	- [x] Add 'column-single' layout
- [x] Add home
- [x] Global style reset
	- [x] change primary colors
	- [x] remove button hilights
- [x] Copy articles from old site
	- [x]	Get images
	- [x] Order and rename images
	- [x] Resize images that need it
	- [x] Include content
	- [x] Crop and rotate some imgs
- [ ] Contact form with mailgun/sendgrid/mailchimp integration
- [ ]	Implement ZoomBox feature
	- [x] Desktop
	- [x] Fix loading timeout and disabled by default
	- [ ] Mobile (with img-touch-canvas)
- [ ]	Add show nav on scroll up
<!-- - [ ] Add Js ramda utils (for templating and client code) -->
- [ ] SEO
	- [ ] Sitemap
	- [ ] Metas
	- [ ] ...
- [ ] Add cc-by-nc-sa license and logo
- [ ] I18n

### Later
- [ ] Write scripts (node? bash? ook?) for build-deploy workflows and put in npm scripts
	- [ ] dynamic CNAME
	- [ ] basic readme
- [ ] Investigate submodule workflow
- [ ] Reorganize git repos
- [ ] Put theme in git submodule

### Far down the road
- [ ] Develop deployment express api
- [ ] Develop cms backoffice, integrated with api
- [ ] Implement resize and upload images (with forced predefined ratio for some cases)
