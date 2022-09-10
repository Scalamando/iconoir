import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ReplyToMessage extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ReplyToMessage({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L12 11L17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V12.8571" stroke="currentColor" stroke-linecap="round"/>
<path d="M13 17.1111H19.3C22.9 17.1111 22.9 22 19.3 22M13 17.1111L16.15 14M13 17.1111L16.15 20.2222" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
