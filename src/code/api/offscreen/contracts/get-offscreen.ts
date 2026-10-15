declare function getOffscreen<N extends OffscreenName>(
	name: N,
): OffscreenTarget<N>;