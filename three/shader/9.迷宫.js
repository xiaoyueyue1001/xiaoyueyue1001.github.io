export const vertexShader = `
void main() {
    gl_Position = vec4( position, 1.0 );
}
`

// 迷宫
export const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_start_time;
uniform vec2 u_mouse;

float random (in vec2 _st) {
  return fract(sin(dot(_st.xy,
                       vec2(12.9898,78.233)))*
      43758.5453123);
}

float plotY(vec2 st,float y,float w){
  return smoothstep(y-w/2.0,y,st.y)-smoothstep(y,y+w/2.0,st.y);
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec3 color = vec3(0.0);

  st *= 10.0;

  vec2 ipos = floor(st);  // integer
  vec2 fpos = fract(st);  // fraction

  st = fract(st);

  float line1 = st.x;
  float line2 = 1.0 - st.x;
  float randnumber = random(ipos+u_start_time);
  float line = mod(randnumber,0.2) > 0.1?line1:line2;

  color = mix(color,vec3(1.0,1.0,1.0),plotY(st,line,0.3));

  gl_FragColor = vec4(color,1.0);
}
`

