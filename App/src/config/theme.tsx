import type { ThemeConfig } from 'antd';

export const config: ThemeConfig = {
    token: {
      colorPrimary: "#62bb46",
      colorInfo: "#62bb46",
      colorWarning: "#fa142d",
      borderRadius: 7,
      colorPrimaryBorder: "#62bb46",
      colorPrimaryBorderHover: "#72c34f",
      colorBgContainer:"#000"
    },
    components: {
      Slider: {
        "railBg":"#8181814d",
        "railHoverBg":"#8181814d",
        "dotSize": 10,
        "railSize": 20,
        "controlSize": 0,
        "handleLineWidth": 0,
        "handleLineWidthHover": 0,
        "handleSize": 0,
        "handleSizeHover": 0,
        dotBorderColor:"#62bb46"
      },
    },
  };