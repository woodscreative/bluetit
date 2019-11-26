# bluetit

Hey, want that annoying notification style, cycling title thing? Open `bluetit.js`, see bottom of file...

```
// update your titles...
bluetit.setTitles([bluetit.config.el.innerHTML, 'New Message'])
bluetit.start();
```

## Configuration

Open `bluetit.js`..

```
// configuration...
bluetit.config = {
  // {int} delay time in ms
  delay: 2000,
  // {array} the titles to cycle, @see cycle() 
  titles: ['Be Kind','Be Brave'],
  // {int} cycle index, @see cycle()
  i: 0,
  // {object} the title element selector
  el: document.querySelector('title')
};
```
