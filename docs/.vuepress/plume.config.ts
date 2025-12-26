import {defineThemeConfig} from 'vuepress-theme-plume'
import {enNavbar, zhNavbar} from './navbar'
import {enNotes, zhNotes} from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/flash1.png',

    appearance: 'dark',

    transition: {
        appearance: 'circle-clip'
        // appearance: 'horizontal-clip'
        // appearance: 'vertical-clip'
        // appearance: 'skew-clip'
    },

    social: [
        // { icon: 'github', link: '/' },
        {
            icon: {
                svg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve">  <image id="image0" width="200" height="200" x="0" y="0"\n' +
                    '    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo\n' +
                    'AAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAABIySURBVHja7d17lNzUfQfw\n' +
                    '70+za2lst4WcGjAnaTm1k0BCiQ0BN6Ft1oTHzoxNIRz2uA04lNA8GxOb1RoSCuscHvFoFhunhcMr\n' +
                    'JMUlNE5wyTKaNZjAoZRg3lBSnqEEUihxT0LKPjTrHf36x67LZlmvpZWurkbz+/xr6d7flfVdzYyu\n' +
                    'dAEhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQInVIdwFJMauVkwwDRzJwFJiXAThCd01N5lkQ\n' +
                    '7SLgad/HM/VS9926C0pCSwTEcp3vAPiM7joy5rte0T5HdxGqZTog+aqzjAk7AczXXUtGDRLjxJGS\n' +
                    'vUt3Iaq06S5AJSY8pLuGjJs/cYwz+4fW0F2AKqbrOLpraBVZPtaZTL5VrZwN4n/UXUdLYVrtlbpv\n' +
                    '0V1G3DJ6BeFO3RW0nmwe82wGhLBUdwktJ6PHPHsfsbZvOsAyx36tu4xW5NXbDsTpa9/SXUecMncF\n' +
                    'sdrGluiuoVVl8dhnLiDeyOCjumtoVVk89pkLCLo2DILpYd1ltBymh9G1YVB3GXHLXkAAgPzHdZfQ\n' +
                    'cjJ6zDMZEAa2666h1WT1mGcyIPViz10gXKe7jpZBuK5e7LlLdxlqhpZhluv8EsAC3XVk3G6vaB+k\n' +
                    'uwhVMnkF2csr2gcR0K+7jqwioD/L4QAyHhAAGCnapxKwVncdWUPA2pGifaruOhIYZ2sw3fLJBmgp\n' +
                    'M46emBbxft01NZkXwXiCCI/74Cey+p1DCCGEEEIIIYQQQgghhBBCCCHSfyd9Ts05yvDpI0R8HANH\n' +
                    '6q5HREfAM8z0sG/wU6MF+2nd9eyn1nQy3UqBCBeD+eO6axEKET3IjMvqxe6a7lKmLU93AdPJu+Ut\n' +
                    'DPqK7jpEcgj8rZFizxrddby7rpSRcLSuNIYkVQGx+p0O5HCv7jqERg0s91ba9+kuY6/UPA8y392y\n' +
                    'ADncoLsOoVkON8x3t6TmKdDUBGQPe90AFuuuQ2i3eOJcSIXUBAQgCYeYkJ5zITUBMUiuHmJcms6F\n' +
                    '1ASEWR6BFePSdC6kJiAAfqW7AJEaqTkX0hMQwou6SxApkaJzIT0BAb2suwKRFuk5F9ITEG68prsE\n' +
                    'kRIpOhfSdSfdde4F0KG7DqHVfV7RXq67iL3ScwUB4A0OrtRdg9ArbedAqgKCrg2D5BvH6y5D6EG+\n' +
                    'cXzaFuFJ1UesyUzXcQhIzZQDoQ4DlXrRtnXXMZ3UBgQArGrlbBAXARwLYJHuekSsfgbgETC5Xqn7\n' +
                    'Ft3F7EuqAzLZ3IFNC/09Yx/UXYeIzmhve364c+0buusQQgghhBBCCCGEEEIIIYRoZcneKNzhzLP8\n' +
                    'sQUG2hf4YzxP9+BF8zDaaMjHnt2e0bYbp9hDSfWrPCD5WvlM38fHiKgE4ANJDUxk2gvMXDUM/GSk\n' +
                    '0LNNZUfKAmJWN55ElLMBPknlAESro7uZG069tP5uJa2raNR0nU0EfFXpcRFiEgY214v22rjbjT0g\n' +
                    'pus8QcCSRI6KEJMw8GS9aC+Ns81YA2K6zq8JOCDRoyLEJAy8VS/aB8bVXmxPFJpuZbuEQ+hGwAGm\n' +
                    'W9keV3uxBMRyy9cS+DRtR0WISQh8muWWr42nrYjMat8HCP6TIOR1Hxgh/h9jhGEsqZcueCFKM5Gv\n' +
                    'IET+agmHSB1CnshfHbWZGD5i0ad1Hwshphf93IwUkHytfCbAh+k+DEJMjw8bP0dnL1JAfJ8idS6E\n' +
                    'alHP0WgfsSg96zgIMa2I52ikgBAoNYstind5CcAugHfrLkSnqOdoW7Tu+SDdB0BMIHqQGLcT6MfD\n' +
                    'jbefx8re4b3/NO+Oyw/229sX+0yfIsIqAIfqLjc50c7RSPdBLNdh3cNveYxbQbjJK9o/DrL57w5c\n' +
                    '9Z76mL+KDO4DYOkuPwle0Z71eR7xCiI0u9wr2ReH2eF/O9f9CsA1Vq3vebC/FcAhugeRZhKQJkXw\n' +
                    '3zdSXP+L2e7vFS64B8BCq1bZBebjdI8nrdK1/IEIhukTUcIxmVfoXgain+oeUlpJQJoMga/2St33\n' +
                    'x9ronrEiUrSybJpIQJrLL5HL9cXdqHfqha8S4Tzdg0sjCUgTIcJtI6dcoGSBy5GCvZ2BJ3SPMW0k\n' +
                    'IM3lNpWNE/BD3QNMGwlIsyDsHCnYP1HZhe/7t+seZtpIQJoGvaK6h9EV659Nop9mIgFpFg1+JZmO\n' +
                    'kuqnOUhAmgQRP5dQTy/rHmuaSECahJ8jL4l+GCz3QyaRgDQJGktmzhQBR+kea5pIQJqFwQcn0g/z\n' +
                    'R3QPNU0kIE2DlL8E3By4ajGIkglik5CANI+OOW7lQ0p78P2C7kGmjQSkiRjc6FLZPoElIFO0xvMg\n' +
                    'hAfh+3cz5V5Hjl4H+0xjOGT8cz19AsDJuksMNg5jjVnb+L16Yf3zcTdtus5XAUhApshyQIYAupoN\n' +
                    '4+Z657qXZtjuCvPOK/+IjPbPAnw+gDQvDXegwcb5AL4UZ6Pt1fISAJfqHlwaZfKZdGZs4zZ8Y/QU\n' +
                    '+5kw+83Z4RxJY7iECOl+3xf7G7zS+t5Y2nK3mBaNPgbmD+selipRnknP3HcQZmyrl+yusOEAgNFT\n' +
                    '7GfqJbuLGUrXvYuMjEvN2sZT42jKpPqDWQ5HVJkKCIP76iU78hfZesnuAuNK3eOZcazU/rM42iEf\n' +
                    'j+geS5plKSD31Ys93XE15pXsrwG4Wfegpkd3j3aui+U5cm+osV73aNIsKwF52/fxlbgb9fK//yUQ\n' +
                    'PaB7cFMx+Ztja6zrwt8AuFz3mNIqEwFh4JrRFeG/c+zX8r/2iPhbusc3xQv1Qo8bZ4Ne0b4YwKju\n' +
                    'gaVRJgLS1sbKHkUdMQdvB/Ci7jHuxeDNStpl6tE9tjRq+oAw8IOhk3ueVNbB8g1jDKTlUdR6vdgT\n' +
                    'eO09s7bxg4EbLnVfDeB13QNMm6YPCIB/U90BEd2pe5AAwMDmwBu7W0xiozdUBz7kC/sUzR8QMpQ/\n' +
                    'AWcM12P5STWqdpiB34llUf1SAKvMHZXAs4C9FfZWInpK9zjTpPkDgrHY5yVNNXzG198A8D9ah0n0\n' +
                    'vcHimuBrfTAuAgDyuTdMN/7EfmJc0wdExcS9abHeZ7UNYFPQba1q+Z23JDI+btWczwbdt17srgF0\n' +
                    'j86xpknTB2TuwKaFiXRk8Hu1DZLw4HChO/gdb6LfnnjI6A3VHfPXtY01ZZo+IBhrKF8tyXTLi8D6\n' +
                    'VmWiED/tWq5zAoCpYX6v5VY2BG1jpGTvAuP7usabJk0fEB+8RHUfBtGxGof4XyOFnjCTJ/cxbZ0v\n' +
                    'me9eEXi9PvY51MI8WdX0AYGh/lltZl6ua3hhrh6mW14E4M/39e9jNKcctK36yp4XCQh8zyWrmj8g\n' +
                    '4JPz7kZl3w/MgasWA/Q5XaMbKfZUgm5LZMz8V5/5nLl3Vo4J2l67kWv5q0gGAoIDfRjnq2rc8MfW\n' +
                    '6BoYEQWfB+ZuMcF8zv428w0OfBWZWM+wpScyZiEgIGDN3IHy0SraZlDss4QDM8gJuqmFetC5VCfk\n' +
                    'a87pQdv1ivbFXtEmr2iT1xiaRznjDwwYRxN4FQH92o5NQrLyTPocv0HXAPiTuBs22D/WJyPxh4oI\n' +
                    '9KNQi+UweoM+QM2gMoDtoYta2Ts8AgwDeA3ji+3885z+yuGG0VgFMjL5THsmriAAAMIyy63cFHez\n' +
                    'w6X1jzLhC0kPh30/8HcPq+acBQrxf8m82KyWY/lYOrqy+zmvtL6XgbVJH6MkZCcgAAA+N+8618Td\n' +
                    'ar1gXwfiG5MaBTGe8lb0/GvwYYd/IwkRBf4uEkS9aG/2c3REAocnURkLCMDAFy3Xudfc0bcizna9\n' +
                    'Qs/fMOPJRMZgIPjVo9/pALB4Ft3MMatOrAuCjp7S/RwbufcrPjyJylxAJnRQw+/Pu86PzB19K+Ka\n' +
                    'jmLx2AmqC2fGW17B3hp4h9zsJxcSYV3cP5HXO9e9xCBtv/zFLZPvxdqH1wA8C8KbzHiT2B8Ccjd7\n' +
                    'pe6fhxpzrfKnYA7+8Scsor/zCt2XBdnUdMuLCPRSkG334XmvaB+uYhhW1bkfhD9TcoxCkvdiBfM+\n' +
                    'ACeDcTYB3SDjUhjh31riFbofYOa/VVWk9+rvbAy6LQGR3uJCjG+oGgeBr1bVdpJaKSDvxrzccsuh\n' +
                    'f/mql3r+ASpeCcS4CZ///J5A27pbTICi/Lq2a6Rk3xr7GCaMlHp+SMDTqtpPSmsHBABA51quE3p6\n' +
                    't1e0zwX43+OshHO5bwbd1qLRaD+rMv9LnLVPi0jdR9GESEDGXZavVf4y7E7sN06LrwS+Zz8v2Z6y\n' +
                    'ebTZtmSoX+6Zx/gHqvtQTQIygZlvzrt9oe7E11dc9DIDsbwjlw0KfvWoOWch4lvoiQ3lT2L65L+p\n' +
                    'ug/VJCDvMJn9m+fesTHUg1H1ot0P5qjPcb9U77R3Bt46hndYDTfeVh6QPPz/Vt2HahKQyQiH++3G\n' +
                    'DWF380o93wQj+L2LqZgD/3I1fmOQ/zjyWHOsfB7ebw7zhlT3oZoE5N2K+Wr578Pu5JF5HoD/mEV/\n' +
                    'e7xST+BpLJSjWOY8WWS9J452ZuzjNUvbY8pxkYBMg4m+nK8660LtVFxTNww+exbdBZ4TZbrlRQyO\n' +
                    '5TuPQTnlASG0JfNCDYUkIPvAhL58tXxGmH2GO3seh0Grw+zj5ecG/nJuMIUL7UzjYyyKq60ZOjle\n' +
                    'eR+KSUBmQnTj3OrGj4bZxevsvoWBYN8pCFux/MuDgbZ1t5hM8a1N6PukfJk5TmBtd9UkIDNg4IAG\n' +
                    'GdfPv905KMx+9aJ9ITGq+9vObwQMEmK4MTgFEc6cO3C5so9A+R3OMjTL6sEzkIDsBwFL91gI/YyJ\n' +
                    'AT4P4FcmNTQAoovQwHKAPwPG10KtacIc2+pZezUa7Z9SdNjAPil7T0CSWmk2byQM7gu7xJtV6/sk\n' +
                    'uNFl+Mb1wyu6H5tt31bNOQuMWxQMywMZK7zCBbG+ajRfLZ/BRKm5ix5lNm9WnklXjkAXmFXn1XrJ\n' +
                    '3hJ0n4kTL/LJx8DaSH/J9s0C+1sBxPdRq793LhOFvpeUVvIRKwQiXD2n6vxFkn1a/U4HMZS8sWXC\n' +
                    'IVatsiuuxszcvAcAHKj+yCRDAhKSQXTtvGp5SVL9xXVjcEbMx1muc++8nZsPnm0T83ZuPthynXsJ\n' +
                    'WJrUsUmCBCQ0Xtgguub37rxS+V/JOG8MBtDhj+65y3LLoe7jAIDlllf7o3vuAtCRUK2JkS/ps3eb\n' +
                    'V7RDT5EPy3Ir/wnwYYmOjDDAPt3hw39oT2n69R/z/c7H/DZaSuCVYHQmWl9I8iVdj1Wm6/y8XrQv\n' +
                    'VNsNXwHg+kRHxugk4s4cCDnXGQXwJoA3GSAiLATjUAZAnP2/j/IRKwIC1ptu+Ysq+/AaQ/8EqH+4\n' +
                    'aQZzMP48/0cJOEbnOik6SEAiIlDsL6r7LSt7h8GN7+oeZ6uSgERXU90BGYasPKuJBCQq9h9W3QUN\n' +
                    'jz6ke5itSgISlWEEfwP7LE0sQ52KtdpbjQQkIgb9IqGu9K7T3qIkIBEZvj8/oa4yM32jmUhAIvKJ\n' +
                    'EnqslCUgGkhAIjIYCb3unyQgGkhAImKC8sdKzQHnRMisBy0kINEdka86y1R2QEyf1j3IViUBiUGc\n' +
                    'L1OYyqpW/hCABEQTCUg8VpvVspoZrYRLwNyue4CtSgISF6LL427Sqm7sBfhc3UNrZRKQmBBwtFVz\n' +
                    'YpuXNXdg08Ksrj3eTCQgcWJ0jv/Vj8Z0y4t8f+x13cMREpD4kXGp5Zavnb8j3Mvm9srXnNMjLswp\n' +
                    'YiQBUYK+MDaGh8xqOfDL0/I7nGVWrXIrM27XXb14R9Rn0gcRcaWj7OPdAP2UmZ8A0csG8xs+4W1i\n' +
                    'HArQQgaWkkEfAvOHdVeaUUNe0Z71fLmId2dpN8ASkBnRAgAdRNQBAEw0/ldp4k8TAUALPNutD+2O\n' +
                    'snfEj1gcqXMh1It2jkYKCIPv1z18IWYS9RyNFBCDaZvuAyDETKKeo5HfiWy5zkMAlE7WE2KWdnlF\n' +
                    'O9TS3lNF/pmXQd/WfRSEmE4c52Ysb9U3XedRAo7RfUCE2IuBx+pFO9TyedOJ5UYhETbrPiBCTBbX\n' +
                    'ORlLQLyCvRXsb9B6RITYi/0NXsHeGkdTubhqGrt1531tf3UiYeKGmBBasL/BK63vjau52Ff2ytfK\n' +
                    'ZzLT9xM9KEIAIOKukUJPrLceYp+sOFLo2UbEXQzMetFKIcJg4DEV4QAUXEEmM93K5wh8HoBjVfYj\n' +
                    'WtYjDLqxXuxWtn6K0oDsZfU7HWTgTCYcOz55jxdAZgGLcIYmJsfuJsYj7GObt9K+T3dRQgghhBBC\n' +
                    'CCGEEEIIIYQQQgghhBBCCCGEEEIIIYQG/weaCFkyfgPovwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAy\n' +
                    'NC0xMi0wNVQwOToyMjowMiswMDowMHckZ24AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTItMDVU\n' +
                    'MDk6MjI6MDIrMDA6MDAGed/SAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTEyLTA1VDA5OjIy\n' +
                    'OjAyKzAwOjAwUWz+DQAAAABJRU5ErkJggg==" />\n' +
                    '</svg>', name: 'pdata'
            }, link: '/'
        },
        {
            icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"/></path></g></svg>',
                name: 'email'
            }, link: 'mailto:ysh17600824539@gmail.com'
        },
    ],

    navbarSocialInclude: ['pdata', 'email'],

    footer: {
        message: '',
        copyright: 'Copyright © 2024-present yuanshaohang',
    },

    locales: {
        '/': {
            profile: {
                avatar: '/flash1.png',
                name: 'Pdata 文档',
                description: '',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: zhNavbar,
            notes: zhNotes,
        },
        '/en/': {
            profile: {
                avatar: '/flash1.png',
                name: 'PDATA docs site',
                description: '',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: enNavbar,
            notes: enNotes,
        },
    },
})
