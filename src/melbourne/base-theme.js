import base_palette from './base-palette'

// melbourne.base-theme/themeBase [10] 
function themeBase(palette,variant){
  let {bg,fg} = variant;
  return [
    base_palette.getColor(palette,fg),
    base_palette.getColor(palette,bg)
  ];
}

// melbourne.base-theme/themeNormal [18] 
function themeNormal(palette,variant){
  let {bg,fg} = variant;
  let [fgNormal,bgNormal] = themeBase(palette,{bg,fg});
  return {bgNormal,fgNormal};
}

// melbourne.base-theme/themeActive [28] 
function themeActive(palette,{active,bg,fg}){
  let [fgActive,bgActive] = themeBase(palette,{
    "fg":(active && active.fg) || bg,
    "bg":(active && active.bg) || fg
  });
  return {bgActive,fgActive};
}

// melbourne.base-theme/themeHovered [39] 
function themeHovered(palette,{hovered}){
  let {isDark} = palette;
  let {fg = {"raw":1},bg = {"raw":isDark ? -0.7 : 0.7}} = hovered || {};
  let [fgHovered,bgHovered] = themeBase(palette,{bg,fg});
  return {bgHovered,fgHovered};
}

// melbourne.base-theme/themePressed [51] 
function themePressed(palette,{pressed},override){
  let {isDark} = palette;
  let {fg = {"raw":1},bg = {"raw":isDark ? 0.7 : -0.7}} = pressed || {};
  let [fgPressed,bgPressed] = themeBase(palette,{bg,fg});
  return {bgPressed,fgPressed};
}

// melbourne.base-theme/themeHighlighted [63] 
function themeHighlighted(palette,{highlighted}){
  let {fg = {"key":"background"},bg = {"key":"error"}} = highlighted || {};
  let [fgHighlighted,bgHighlighted] = themeBase(palette,{bg,fg});
  return {bgHighlighted,fgHighlighted};
}

// melbourne.base-theme/themeDisabled [74] 
function themeDisabled(palette,{disabled}){
  let {
    fg = {"key":"neutral","mix":"background","ratio":5},
    bg = {"key":"background","mix":"neutral","ratio":1}
  } = disabled || {};
  let [fgDisabled,bgDisabled] = themeBase(palette,{bg,fg});
  return {bgDisabled,fgDisabled};
}

// melbourne.base-theme/themeUiButton [90] 
function themeUiButton(palette,variant){
  return Object.assign(
    themeNormal(palette,variant),
    themePressed(palette,variant),
    themeHovered(palette,variant),
    themeDisabled(palette,variant)
  );
}

// melbourne.base-theme/themeUiState [101] 
function themeUiState(palette,variant){
  return Object.assign(
    themeNormal(palette,variant),
    themePressed(palette,variant),
    themeHovered(palette,variant),
    themeDisabled(palette,variant),
    themeActive(palette,variant)
  );
}

// melbourne.base-theme/themeUiInput [113] 
function themeUiInput(palette,variant){
  return Object.assign(
    themeUiState(palette,variant),
    themeHighlighted(palette,variant)
  );
}

var MODULE = {
  "themeBase":themeBase,
  "themeNormal":themeNormal,
  "themeActive":themeActive,
  "themeHovered":themeHovered,
  "themePressed":themePressed,
  "themeHighlighted":themeHighlighted,
  "themeDisabled":themeDisabled,
  "themeUiButton":themeUiButton,
  "themeUiState":themeUiState,
  "themeUiInput":themeUiInput
};

export default MODULE