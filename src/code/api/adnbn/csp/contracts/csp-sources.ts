export interface CspSources {
	connect?: CspSourceValue[];
	image?: CspSourceValue[];
	style?: CspSourceValue[];
	font?: CspSourceValue[];
	media?: CspSourceValue[];
	worker?: CspSourceValue[];
	child?: CspSourceValue[];
	frame?: CspSourceValue[];
}