(function(window) {
  'use-strict';
  var Application = window.Application || {};
  var rangeValues = {
    "1": "1 ... good for babies! Totally decaffeinated",
    "2": "2 ... it's good that you are faintly trying!",
    "3": "3 ... it's almost a real coffee!",
    "4": "4 ... it's good for a lunch break",
    "5": "5 ... you are just in halfway!",
    "6": "6 ... with proper POWER!",
    "7": "7 ... you really like caffeine!",
    "8": "8 ... the right choice for a bit sleepy person",
    "9": "9 ... have you got a strong heart?! ",
    "10": "10 ... well hell of a strong coffee!"
  };

  $(function() {
    // on page load, set the text of the label based the value of the range
    $('#caffeineLabel').text(rangeValues[$('#caffeineLevel').val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $('#caffeineLevel').on('input change', function() {
      $('#caffeineLabel').text(rangeValues[$(this).val()]);

      // change label text color directly with HTML
      if ([$('#caffeineLevel').val()] < 4) {
        document.getElementById('caffeineLabel').style.color = 'green';
      } else if ([$('#caffeineLevel').val()] > 3 && [$('#caffeineLevel').val()] < 8) {
        document.getElementById('caffeineLabel').style.color = 'orange';      } else {
        document.getElementById('caffeineLabel').style.color = 'red';
      };
    });
  });

  window.Application = Application;
})(window);
