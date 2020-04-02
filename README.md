### canvas 캔버스
------
캔버스의 크기는 기본 300x150 설정

#### canvas 지원여부 검사
```jsx    
if(canvas.getContext) {
  const ctx = canvas.getContext('2d')
  // drawing code her
}else{
  // canvas-unsupported code here
}
```
------
#### 직사각형(Rect) 그리기     
* fillRect(x, y, width, height) 색칠된 직사각형을 그린다
* strokeRect(x, y, width, height) 직사각형 윤곽선을 그린다
* clearRect(x, y, width, height) 특정부분을 지우는 직사각형, 지워진 부분은 투명해진다
x,y 는 캔버스의 좌측상단에서 사각형의(원점으로부터 상대적인) 위치를 뜻하며 width, height는 사각형의 크기

------

#### 경로(path) 그리기
경로(path)는 직사각형 이외의 유일한 원시적인 도형이다.     
경로는 점들의 집합이다. 경로를 이용하여 도형을 만들 떄에는 몇가지 추가적인 단계를 거친다
1. 경로를 생성한다
2. 그리기 명령어를 사용하여 경로상에 그린다
3. 경로가 한 번 만들어졌다면, 경로를 렌더링 하기 위해서 윤곽선을 그리거나 도형 내부를 채울 수 있다.
* beginPath() 새로운 경로를 만든다. 이후 그리기 명령들은 경로를 구성하고 만드는데 사용
##### Path methods
* closePath() 현재 하위 경로의 시작부분과 연결된 직선을 추가
* stroke() 윤곽선을 이용하여 도형을 그린다
* fill() 경로의 내부를 채워서 내부가 채워진 도형을 그린다
* moveTo(x, y) 경로의 시작점
* lineTo(x, y) 현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그립니다

------

#### 호(arc) 그리기
호나 원을 그리기 위해서 arc() arcTo() 메소드 사용
* arc(x, y, radius, startAngle, endAngle, anticlokwise)     
x, y 위치에서 원점을 두면서 반지름 radius를 가지고 startAngle에서 시작하여 endAngle에서 끝나며, anticlokwise 방향으로 (기본값은 시계반향 회전) 호를 그리게 됩니다.       
anticlokwise는 Boolean값으로 true면 반시계반향, false는 시계반향     
radius는 각도값이 아니다. 각도를 radius으로 바꿀려면 (Math.PI/180)*degrees 사용
* arcTo(x1, y1, x2, y2, radius) 주어진 제어점들과 반지름으로 호를 그리고 이전 점과 직선으로 연결합니다.

------

#### Bezier(베지어) 곡선, Quadratic(이차) 곡선




