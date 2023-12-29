var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('rr1.png');
		console.log("key 'r' pressed");
		window.alert("The red ranger (key 'r') uploaded");
	}

	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
		console.log("key 'g' pressed");
		window.alert("The green ranger (key 'g') uploaded");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		console.log("key 'y' pressed");
		window.alert("The yellow ranger (key 'y') uploaded");
	}

	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("key 'p' pressed");
		window.alert("The pink ranger (key 'p') uploaded");
	}

	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("key 'b' pressed");
		window.alert("The blue ranger (key 'b') uploaded");
	}
}

