import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SendDiagonal extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SendDiagonal({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2476_13290)">
<path d="M22.1525 3.55321L11.1772 21.0044L9.50686 12.4078L2.00002 7.89795L22.1525 3.55321Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.45557 12.4436L22.1524 3.55321" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2476_13290">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
