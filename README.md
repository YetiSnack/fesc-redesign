# FESC redesign
## Objective:
Redesign current FESC site to ensure accessibility, improve mobile friendliness, optimize performance, enhance functionality, and facilitate ease of use for all site visitors.

## Audit:
Site audit was performed using Google Lighthouse.
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an open-source, automated tool that has audits for performance, accessibility, progressive web apps, and more.
See the following report for assessment of current FESC site.
### Google Lighthouse Report for [http://floridaenergy.ufl.edu/](http://floridaenergy.ufl.edu/)
![Google Lighthouse Report: Accessibility, Performance, Progressive Web App, SEO, Best Practices](https://github.com/YetiSnack/fesc-redesign/blob/master/report.jpg)

## HTML & CSS Validation:
Validation of HTML and CSS 2.1 using W3C Validation services in Google Chrome for the FESC homepage shows 34 HTML errors and 33 CSS errors.

##  User-Experience Assessment:
	-In its current iteration, the FESC site poses several usability challenges:
	-The design scheme and colors are distracting and difficult to view.
	-Site-wide styles are inconsistent.
	-The information provided is not presented in a clear and cohesive manner.
	-Site navigation is duplicated and inconsistent.
	-User cognitive load is too high.
	-No mobile version of the site is available.
	-*Note: No appreciable difference in site usability was apparent whether viewed using Mozilla Firefox 61.0.1, Google Chrome 67.0.3396.99, or Microsoft Edge 41.16299.492.0

## Recommendations for Improvement:
	-Reduce the amount of detail on the site to include only recent, relevant information, minimizing user cognitive load.
	-Restructure organization of site to present information in a more cohesive manner to facilitate hassle-free access to relevant content.
	-Redesign layout of site to be more intuitive for users by applying familiar design patterns.
	-Restyle all page elements to be consistent across the site.
	-Apply a pleasing style & font to the site to ensure comfortable user experience.
	-Eliminate HTML and CSS errors.
	-Make site design responsive to screen sizes across a wide array of devices.
	-Implement missing accessibility features.
	-Implement performance optimizations specified in Lighthouse report.

# Chart type decision
I chose to use line charts for this data because each of the types of data contain one series tracked over time.
