extends ColorRect

func _process(_delta):
	$FPS_Counter.text = str(Engine.get_frames_per_second());
