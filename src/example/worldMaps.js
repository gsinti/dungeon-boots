import forestLegend from './forestLegend.js';
import legend from './legend.js';

export default {
	town: {
		music: 'forest',
		ambience: 'darkForest',
		legend,
		map: [
			[
				'                   ',
				'GGG&GGGGGGGGGGGGGGG',
				'GGG&GGGGGGGGGGGGGGG',
				'GGG&&&&&&&&&GGGGGGG',
				'GGGGGGG&GGGGGGGGGGG',
				'GGGGGGG&GGGGGGGGGGG',
				'GG&&GGG&GGGGGGGGGGG',
				'GG&&GGG&GGGGGGGGGGG',
				'GG&&&&&&GGGGGGGGGGG',
				'GG&&GGG&&&&&&&GGGGG',
				'GG&&GGG&GGGGGGGGGGG',
				'GG&&&&G&GGGGGGGGGGG',
				'GGGGGGG&GGGGGGGGGGG',
				'GGGGGGG&GGGGGGGGGGG',
			],
			[
				'###D###############',
				'### ###############',
				'#^       d T   T  #',
				'T                 T',
				'T b       ####    T',
				'T ####^e  #  #T   T',
				'T #  #   T#  ##   T',
				'T ##+#^   #   #   T',
				'T   a   c #+###   T',
				'T         | |     T',
				'GT            T  TG',
				'GT  f   ^  T     TG',
				'TTTTTT#1#TTTTTTTTTT',
				'GGTTTT# #TTGGTTTTGG',
			],
			[
				'# ###              ',
				'# ### # #^# # # # #',
				'#                 ^',
				'                   ',
				'           ^       ',
				'  ####    ####     ',
				'  #  #    #  #     ',
				'  ####    #  #     ',
				'          #  #     ',
				'          ####     ',
				'                   ',
				'T                  ',
				'      ###          ',
				'TT    # #   T    TT',
			],
		],
	},
	forest: {
		music: 'forest',
		ambience: 'darkForest',
		legend,
		map: [
			[
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
				'GGGGG&GGGGG',
			],
			[
				'GTTT#2#TTTG',
				'GTTT^  TTTG',
				'GTTT   TTTG',
				'GTTT    TTG',
				'GTTT   TTTG',
				'GTT    TTTG',
				'&TTT    TTG',
				'&TTT h TTTG',
				'&&&&&3&&&&&',
			],
			[
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'G          ',
				'&&  &&& &  ',
				'&&&&&&&&&&&',
			],
			[
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'           ',
				'G          ',
				'&&         ',
				'&&&&&&&&&& ',
			],
		],
	},
	fortress: {
		music: 'dungeon',
		ambience: 'spooky',
		legend,
		map: [
			[
				'################&&&',
				'###############&&&&',
				'######&#&&#####&&&&',
				'################&&&',
				'###############&&&&',
				'##&&###########&&&&',
				'##&&############&&&',
				'##&&#############&&',
				'##&&#############&&',
				'##&&#############&&',
				'##&&&&#############',
				'########## ########',
			],
			[
				'##########5###&&4&&',
				'# #    &&| |^#&   &',
				'#   #       i &&  &',
				'# &k#^     g&& & i&',
				'# &###p &&&&&& &  &',
				'# #  ###   ^   &  &',
				'& #      k   # &  &',
				'& # #####     O#  &',
				'& #   i#      #   &',
				'& # # ####    ## ##',
				'#  C   #      k   #',
				'#&&&&&###&&&&###&&&',
			],
			[
				'##########        #',
				'###############&&&&',
				'######&&&& ####&&&&',
				'########## ####&&&&',
				'###  &&#    ## && &',
				'###   ####   &&&&&&',
				'###   ####    #####',
				'##########    #####',
				'#&&&&&####    #####',
				'#########     #####',
				'###   ###         #',
				'#########& ########',
			],
			[
				'##############&&&&&',
				'#      &&    #&    ',
				'#   #         &&   ',
				'#   #       && &&&&',
				'# &###  &&&&&& &&&&',
				'# #  ###       &  &',
				'& #          # &  &',
				'& # #####      #  &',
				'& #    #########   &',
				'& # # ####    ## ##',
				'#      #          #',
				'#&&&&&###&&&&###&&&',
			],
		],
	},
	forestOutside: {
		music: 'forest',
		ambience: 'darkForest',
		legend: { ...legend, ...forestLegend },
		map: [
			[
				'Oddddddd###################ddddd',
				'OOOOOOOO###################Odddd',
				'OOOOddddO##################Odddd',
				'OOodddddddddO##############ddddd',
				'OOodddddddddOOO############Odddd',
				'OOddddddddddOOOO###########Odddd',
				'OooddddddddddddOOOOO######OOdddd',
				'OooOdddddddddddddOdOOOOOOOOddddd',
				'OOOOoOdddddddddddddddddddddddddd',
				'OOOooOdddddddddddddddddddddddddd',
				'OOoooOdddddddddddddddddddddddddd',
				'OOoooOdddddddddddddddddddddddddd',
				'OOoooOdddddddddddddddddddddddddd',
				'OOoOoooddddddddddddddddddddddddd',
				'OOOOOodddddddddddddddddddddddddd',
				'OOOOOOdddddddddddddddddddddddddd',
				'Oooooooddddddddddddddddddddddddd',
				'OOOOOooddddddddddddddddddddddddd',
				'OOOOOOdddddddddddddddddddddddddd',
				'Oooooodddddddddddddddddddddddddd',
				'OOOoOodddddddddddddddddddddddddd',
				'Oodooddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'ddddddddddddddddddddoOoddddddddd',
				'ddddddddddddddddddddoOoddddddddd',
				'dddddddddddddddddddddodddddddddd',
				'dddddddddddddddddddddodddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
				'dddddddddddddddddddddddddddddddd',
			],
			[
				'mmmmmmmm###################mmmmm',
				'm       ##        O##+##  #YyyYm',
				'm  H     ^ ^##  ####^ ^# i#    m',
				'm m m m m    #              r  m',
				'm      m      ##   #   # j#  r m',
				'm   H  mYmmmm   ####k k#  #    m',
				'm      m m   m     ## ####  t ym',
				'm          Y m m               m',
				'm t  m  mmmmmm m  mm^ ^mV mm  mm',
				'm   m              m   m  m   Jm',
				'm       r  y     m m   m  m mmmm',
				'm  t t y y ttt  m  m   m  m    m',
				'mP           mmmmJ  m m   mmmm m',
				'm nn n  P   r   m         m    m',
				'm         tt     mmmmmmmmmm mm m',
				'mn  nt r      m     m       m  m',
				'm  n P  ttt  m   m     mmm     m',
				'm y      m       m  yy  m rrr rm',
				'm    y    mm m    m    m  r  Yrm',
				'm  r    mmm m m    mJTm   r y rm',
				'm             m    mmmm   r r rm',
				'm t  t  m m       mmyrym       m',
				'm       m mm m m  mt   tm  rmr m',
				'm       m   m     t     t      m',
				'm     t       mm m  BfB        m',
				'm     m mmmm              mmmm m',
				'm mmmmm     mmmmmmm       m    m',
				'm        t  m  m m m   Tmm     m',
				'm         t        m   m  t r  m',
				'm m  m m    m mttt m   m tw   tm',
				'm m  m    tm    t  m{ }m  t y  m',
				'm  m m m   m m ttt m   m       m',
				'm m        m    t         t  mmm',
				'm     t t  m ttt mmm[ ]mmm  m  m',
				'm mmmm m           m| |mmm m   m',
				'm          m  yyyy m| |  mwm   m',
				'mm m t t   m   YY  ma cm mmm   m',
				'm  t mrmym m m    mm   mm      m',
				'mT m       m   Y  m     m      m',
				'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
			],
			[
				'        ###################     ',
				'        ###################     ',
				'            ###############     ',
				'            ###############     ',
				'             ##############     ',
				'                          #     ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
				'                                ',
			],
		],
	},
	tavern: {
		music: 'tavern',
		ambience: 'spooky',
		legend, // Note that not all maps need to use the same legend, they can be different
		map: [
			[ // Right now its best to have the "floor" levels be completely filled in
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				'&&&&&&#############',
				'&&#################',
			],
			[
				' &&&&&############ ',
				'####   Y  ^ O  ij|#',
				'####C #^          #',
				'####  #        ## #',
				'##7#  #^          #',
				'&h    #| O^  |   |#',
				' &&&&& ########6## ',
			],
			[
				'                   ',
				' ##   #############',
				'####  #          ##',
				'####           #^##',
				' ##   #          ##',
				'      #############',
				' #####             ',
			],
			[
				'                   ',
				' ##                ',
				'#  #  #############',
				'#  #           #   ',
				' ##   #############',
				'                   ',
				'                   ',
			],
			[
				'                   ',
				' ##                ',
				'#  #               ',
				'#  #  #############',
				' ##                ',
				'                   ',
				'                   ',
			],
		],
	},
	tower1: {
		music: 'dungeon',
		ambience: 'spooky',
		legend,
		map: [
			[
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
			],
			[
				' ###8########9#### ',
				'#### ######## #####',
				'#|   #  i   #h   |#',
				'#  k              #',
				'#    #   C  #     #',
				'#  k #  j   #k    #',
				' #################',
			],
			[
				' ################# ',
				'###################',
				'######      #######',
				'######            #',
				'######      #     #',
				'######      #     #',
				' #######  ########',
			],
			[
				'                   ',
				'    ###############',
				'    ###############',
				'    ###############',
				'    ###############',
				'    ###############',
				'    ###############',
			],
		],
	},
	tower2: {
		music: 'boss',
		ambience: 'spooky',
		legend,
		map: [
			[
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
			],
			[
				' #############0### ',
				'#            # #  #',
				'##   |||   |||    #',
				'#Z               ^#',
				'##   |||   |||    #',
				'#                 #',
				' ################# ',
			],
			[
				' ############# ### ',
				'#            ###  #',
				'#^                #',
				'#                 #',
				'#^                #',
				'#                 #',
				' ################# ',
			],
			[
				' ################# ',
				'#                 #',
				'##                #',
				'#                 #',
				'##                #',
				'#                 #',
				' ################# ',
			],
			[
				' ################# ',
				'###################',
				'###################',
				'###################',
				'###################',
				'###################',
				' ################# ',
			],
		],
	},
};
