# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Multiple Overlaps](#multiple-overlaps)
    - [DOM Manipulation](#dom-manipulation)
    - [Picture element and responsive design](#picture-element-and-responsive-design)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Create a FAQ card.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Solution Screenshot](./Screenshot Frontend Mentor FAQ Accordion Card.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/faq-card-with-css-flexbox-js-dom-properties-desktopfirst-workflow-5hcrnBU2U)
- [Live Site URL](https://rich15.github.io/FAQ-accordion-fEndMentor/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media Queries
- Javascript DOM Manipulation
- Desktop-first workflow

### What I learned

***This is my fourth Frontend Mentor Challenge***

#### Multiple overlaps

I think this was the most difficult part of the challenge. At first I thought I could play with `z-index` to make the images overlap each other in the desktop layout, and after trying different things I realized I couldn't do it. I was *losing my mind* until I found [this post](https://stackoverflow.com/questions/26644163/how-to-make-3-elements-overlap-each-other-with-css) in Stack overflow, which gave me the idea to do "fake backgrounds" like this:  

```html
<div id="fake-bg-x"></div> <!--Horizontal-->
<div id="fake-bg-y"></div><!--Vertical-->
```  

*Styles:*  

```css
#fake-bg-x {
  position: absolute;
  top: 0;
  left: 0;
  width: 63%;
  height: 9.5%;
  background-image: linear-gradient(hsl(273, 75%, 66%), hsl(273, 75%, 62%));
  z-index: 2;
}

#fake-bg-y {
  position: absolute;
  top: 0;
  left: 0px;
  width: 15%;
  height: 100%;
  background-image: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  z-index: 2;
}
```

Even though they are not perfect, I'm pretty sastified with the results and the function they fullfil. However, I'd like to find an easier/better-looking solution for this problem.

#####**UPDATE**

After thinking for some time I figured out that `overflow: hidden` was what I was looking for. Now I needed to know how to make the orange box to 'escape' the overflow. [This answer](https://stackoverflow.com/questions/8837050/allow-specific-tag-to-override-overflowhidden/29687454#:~:text=The%20trick%20is%20to%20keep%20the%20overflow%3Ahidden%20element%20with%20position%3Astatic%20and%20position%20the%20overflowing%20element%20relative%20to%20a%20higher%20parent%20(rather%20than%20the%20overflow%3Ahidden%20parent).%20Like%20so%3A) from Stack overflow (what a coincidence) helped me a lot; basically I moved the box outside of the "image" article and added `position: relative` to the body, besides some image adjusting.

*Case solved ;)*

#### DOM manipulation

I got to practice my skills with Javascript's DOM properties and learned to use some, like `nextElementSibling`. Beggining the challenge I kinda had the idea on how to make the accordion but at some point I didn't know how to display the corresponding answer each time. Finally I encountered `nextElementSibling` and solved my problem.

#### Picture element and responsive design

`<picture>` element is awesome! Until now I was using the good ol' `<img>`, but from now on `<picture>` is my new best friend! Ok, i may keep using `<img>` still, but I discovered the wonders of `<picture>` and its uses in responsive design. Thanks to this challenge I learned how to display different images based on each device. My code was:  

```html
<picture>
   <source srcset="images/bg-pattern-mobile.svg" media="(max-width: 1125px)" alt="">
   <img id="bg-pattern" src="images/bg-pattern-desktop.svg" alt="">
</picture>
<img id="box" srcset="images/illustration-box-desktop.svg" alt="">
<picture>
<source srcset="images/illustration-woman-online-mobile.svg" media="(max-width: 1125px)">
   <img id="woman" src="images/illustration-woman-online-desktop.svg" alt="Woman on a computer (illustration)">
</picture>
```

Because the "box" image didn't appear in mobile devices, I simply used `display: none;` in my Media Queries to delete it. From here I will use the `<picture>` element to make my sites more responsive.

### Continued development

- I will continue to improve my Flexbox abilities (and Grid too).
- I will start making more pages using Javascript and DOM manipulation.
- ~~I wanna find a more efficient way to achieve the "multiple overlap" effect.~~ See [Update](#update).
- I will improve the responsiveness of my pages, as well as their accesibility.

### Useful resources

- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This article is really useful to have all Flexbox properties on hand.
- [Overlapping three elements](https://stackoverflow.com/questions/26644163/how-to-make-3-elements-overlap-each-other-with-css) - This Stack Overflow post gave me the idea to use the fake backgrounds to make the images overlap each other. (See next link)
- [Specific element overriding overflow: hidden](https://stackoverflow.com/questions/8837050/allow-specific-tag-to-override-overflowhidden/29687454#29687454) - Thanks to this post I discovered how to make the orange box escape the `overflow: hidden;` property of `main`. No more fake backgrounds!
- [How to create an accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - This w3 Schools tutorial helped me to end the accordion when I was stucked. It also helped to understand class toggling with Javascript.


## Author

- Frontend Mentor - [@Rich15](https://www.frontendmentor.io/profile/Rich15)
- Twitter - [@rich_osio](https://www.twitter.com/rich_osio)


## Acknowledgments

Thanks to [JimmyRare](https://stackoverflow.com/users/1300012/jimmyrare) for the inspiration on the overlapping solution.
And thanks to [parliament](https://stackoverflow.com/users/1267778/parliament) and [meagar](https://stackoverflow.com/users/229044/meagar) for the answer on the overflow problem ;)
