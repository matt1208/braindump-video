import { Audio, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';
import music from './bensound-funday.mp3';
import { Transition } from './HelloWorld/Transition';
import { FadeTransition } from './HelloWorld/FadeTrasition';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 0;

	return (
		<div style={{ flex: 1, backgroundColor: '#1A202C' }}>
			<div style={{ opacity }}>
				{/* <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Logo transitionStart={transitionStart} />
				</Sequence> */}
				<Sequence from={transitionStart} durationInFrames={40}>
					<FadeTransition type="out" duration={8}>
						<Title titleText={titleText} titleColor={titleColor} />
					</FadeTransition>
				</Sequence>
				<Sequence from={transitionStart + 40} durationInFrames={40}>
					<Transition type="out">
						<Subtitle />
					</Transition>
				</Sequence>
				{/* CHANGE TO DATE */} <Sequence from={transitionStart + 80} durationInFrames={40}>
					<Transition type="out">
						<Subtitle />
					</Transition>
				</Sequence>
				<Audio src={music}></Audio>
			</div>
		</div>
	);
};