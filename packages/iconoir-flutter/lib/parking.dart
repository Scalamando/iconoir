import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Parking extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Parking({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15.5V12.7M10 12.7C10.4762 12.7 11.7143 12.7 12.8571 12.7C13.5714 12.7 15 12.7 15 10.6C15 8.5 13.5714 8.5 12.8571 8.5L10 8.5V12.7Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10" stroke="currentColor" />
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
