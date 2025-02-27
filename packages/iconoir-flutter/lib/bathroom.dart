import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Bathroom extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Bathroom({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 13V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V13.6C3 13.2686 3.26863 13 3.6 13H21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20L17 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 20L7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 13V7C21 4.79086 19.2091 3 17 3H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4 8H8.60003C8.26865 8 8.00393 7.7317 8.04019 7.4023C8.18624 6.07539 8.86312 3 12 3C15.1369 3 15.8138 6.07539 15.9598 7.4023C15.9961 7.73169 15.7314 8 15.4 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
