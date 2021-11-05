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

vec2 random( vec2 p ) {
  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

float plotY(vec2 st,float y,float w){
  return smoothstep(y-w/2.0,y,st.y)-smoothstep(y,y+w/2.0,st.y);
}

void main(){
  // 将每个区域包括自身和相邻8个区域的9个区域，计算随机点的最小距离，制造随机动画
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec3 color = vec3(0.0);

  // 缩放坐标轴
  st *= 10.0;

  vec2 ipos = floor(st);  // 整数坐标
  vec2 fpos = fract(st);  // 小数坐标

  float min_dist = 1.0; // 最小距离默认值

  for(int x = -1;x <=1 ;x++){
    for(int y = -1;y <=1 ;y++){
      vec2 deltaPos = vec2(float(x),float(y)); // 偏差坐标
      // vec2 randomPoint = ipos + deltaPos;  // 计算每个区域
      vec2 randomPoint = random(ipos + deltaPos);  // 计算每个区域随机点
      randomPoint = 0.5+0.5*sin(u_time+randomPoint*6.3232); // 制造动画

      vec2 diff = randomPoint +  deltaPos - fpos;// 随机点+偏差坐标-坐标 = 距离矢量

      float dist = length(diff);
      min_dist = min(min_dist,dist);
    }
  }

  color += min_dist;
  // Draw cell center
  color += 1.-step(.02, min_dist);

  // Draw grid
  // color.r += step(.98, fpos.x) + step(.98, fpos.y);

  gl_FragColor = vec4(color,1.0);
}
`

