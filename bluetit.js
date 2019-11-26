(function(){
  
  /**
   * Bluetit title element rotation
   * @author https://github.com/woodscreative
   * @license MIT
   */
   
  var bluetit = {};
  
  // configuration...
  bluetit.config = {
    // {int} delay time in ms
    delay: 2000,
    // {array} the titles to cycle, @see cycle() 
    titles: ['Be Kind','Be Brave'],
    // {int} cycle index, @see cycle()
    i: 0,
    // {object} the title element
    el: document.querySelector('title')
  };
  
  // {setInterval}
  bluetit.intId = null;
   
  // @param {array} $titlesArray ideally two or more titles to cycle
  bluetit.setTitles = function($titlesArray){
    bluetit.config.titles = $titlesArray;
  };
  
  // start cycling titles...
  bluetit.start = function(){
    bluetit.intId = window.setInterval(bluetit.cycle, bluetit.config.delay);
  };
  
  // stop cycling titles...
  bluetit.stop = function(){
    console.log('stopped');
    clearInterval(bluetit.intId);
  };
  
  // cycle interval callback...
  bluetit.cycle = function(){
    var title = bluetit.config.titles[bluetit.config.i];
    bluetit.config.el.innerHTML = title;
    bluetit.config.i++;
    if (bluetit.config.i >= bluetit.config.titles.length){
      bluetit.config.i = 0;
    };
  };
  
  // update your titles...
  bluetit.setTitles([bluetit.config.el.innerHTML, 'New Message'])
  bluetit.start();
  
})();
