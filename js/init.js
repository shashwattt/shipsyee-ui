  $(document).ready(function() {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.modal').modal();
      $('select').formSelect();
      $('.datepicker').datepicker();

      $('input.autocomplete').autocomplete({
          data: {
              "Apple": null,
              "Microsoft": null,
              "Google": 'https://placehold.it/250x250'
          },
      });

      $("#destinationForm").submit(function(event) {
          event.preventDefault();
          window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + 'pages/export-service.html'
      });

      $(".serviceList").click(function(event) {
          window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + 'result.html'
      });
  });