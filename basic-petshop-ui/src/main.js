window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function() {
          $(this).hide();
      });
  }, 1000);