#!/bin/bash
filelist=`find | grep ".jpg" | grep -v "full"`
for image_file in $filelist
do
  convert -resize 750 -strip -interlace Plane -quality 85% $image_file $image_file
done

exit
