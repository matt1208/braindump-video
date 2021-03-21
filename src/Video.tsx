import { Composition, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Subtitle } from './HelloWorld/Subtitle';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'BrainDUMP',
					titleColor: '#CBD5E0',
				}}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

// const Title = () => {
// 	const frame = useCurrentFrame();

// 	const opacity = interpolate(frame, inputRange: [0, 30], outputRange: [0, 1])

// 	return (
// 		<h1 style={{
// 			position: 'absolute',
// 			textAlign: 'center',
// 			color: "#CBD5E0",
// 			fontSize: '100px',
// 			fontFamily: 'SF Pro Text, Helvetica, Arial',
// 			width: '100%',
// 			top: "40%",
// 			opacity: opacity
// 		}}
// 		>
// 			BrainDUMP
// 		</h1>
// 	)
// };

// const Main = () => {
// 	const {  fps, durationInFrames } = useVideoConfig();
// 	return (
// 		<div style={{ backgroundColor: "#1A202C", flexGrow: 1 }}>
// 			<Sequence from={0} durationInFrames={durationInFrames}>
// 				<Title />
// 			</Sequence>
// 		</div>
// 	)
// }
