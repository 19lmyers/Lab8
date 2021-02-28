const formatVolumeIconPath = require('../assets/scripts/main');

describe('format volume icon path', () => {
	test('0 case', () => {
		expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
	});

	test('1 case', () => {
		expect(formatVolumeIconPath(22)).toMatch('./assets/media/icons/volume-level-1.svg');
	});

	test('2 case', () => {
		expect(formatVolumeIconPath(44)).toMatch('./assets/media/icons/volume-level-2.svg');
	});

	test('3 case', () => {
		expect(formatVolumeIconPath(88)).toMatch('./assets/media/icons/volume-level-3.svg');
	});
});