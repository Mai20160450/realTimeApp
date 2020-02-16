<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Single Page Forum</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
  </head>
  <body>
    <div id="app">
    <app-home></app-home>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
    
  </body>
</html>
