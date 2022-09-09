<?php
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  $head1 = $_POST['head1'];
  $head2 = $_POST['head2'];
  $head3 = $_POST['head3'];
  $head4 = $_POST['head4'];
  $head5 = $_POST['head5'];
  $head6 = $_POST['head6'];
  $head7 = $_POST['head7'];
  $head8 = $_POST['head8'];
  $title1 = $_POST['title1'];
  $title2 = $_POST['title2'];
  $title3 = $_POST['title3'];
  $title4 = $_POST['title4'];
  $title5 = $_POST['title5'];
  $title6 = $_POST['title6'];
  $title7 = $_POST['title7'];
  $title8 = $_POST['title8'];

  $file = fopen("data.txt", "w+t");
  fwrite($file, "$title1 $head1\n$title2 $head2\n$title3 $head3\n$title4 $head4\n$head5 $title5\n$head6 $title6\n$head7 $title7\n$head8 $title8\n");
  fclose($file);
?>