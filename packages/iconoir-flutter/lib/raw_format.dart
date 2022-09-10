import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RawFormat extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RawFormat({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="currentColor" stroke-linecap="round"/>
<path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="currentColor" stroke-linecap="round"/>
<path d="M16.5 9V15L18 12L19.5 15V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 15V12M10.5 12V10.5C10.5 9.67157 11.1716 9 12 9V9C12.8284 9 13.5 9.67157 13.5 10.5L13.5 12M10.5 12H13.5M13.5 12L13.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 15V12V9H6.9C7.23137 9 7.5 9.26863 7.5 9.6L7.5 10.5C7.5 11.3284 6.82843 12 6 12V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 12H6V12C6.82843 12 7.5 12.6716 7.5 13.5L7.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
