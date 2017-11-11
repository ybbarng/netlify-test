---
title: 마크다운 문법 & 기능
date: 2017-11-10T16:59:59+09:00
authorId: ybbarng
layout: post
draft: false
path: /markdown-features
category: Dev
tags:
  - Test
  - Iframe
description: 마크다운 문법과 이 블로그에서 지원하는 기능 정리
---

## 제목

### 문법

```
H1 제목
======
# H1 제목
## H2 제목
### H3 제목
#### H4 제목
##### H5 제목
###### H6 제목
```

### 결과

H1 제목
======
# H1 제목
## H2 제목
### H3 제목
#### H4 제목
##### H5 제목
###### H6 제목

---

## 강조

### 문법

```
*기울이기*

_기울이기_

**굵게**

__굵게__

_기울이면서 **굵게** 만들기_
```

### 결과

*기울이기*

_기울이기_

**굵게**

__굵게__

_기울이면서 **굵게** 만들기_

---

## 취소선

### 문법
```
~~취소선이 적용된 문장~~
```

### 결과

~~취소선이 적용된 문장~~

---

## 순서 없는 목록

### 문법

```
* 아이템1
* 아이템2
    * 아이템2-1
    * 아이템2-2
```

### 결과

* 아이템1
* 아이템2
    * 아이템2-1
    * 아이템2-2

---

## 순서 있는 목록

### 문법

```
1. 아이템1
100. 아이템2
1. 아이템3
    1. 아이템3-1
    1. 아이템3-2
```

### 결과

1. 아이템1
100. 아이템2
1. 아이템3
    1. 아이템3-1
    1. 아이템3-2

---

## 수평선

### 문법

```
---
```

### 결과

---

---

## 그림

### 문법

```
![고흐-해바라기](https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg)
```

### 결과

![고흐-해바라기](https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg)

---

## 인용

### 문법
```
일반 글

> 인용 첫 문장

> 인용 두 번째 문장
```

### 결과

일반 글

> 인용 첫 문장

> 인용 두 번째 문장

---

## 각주

### 문법

```
각주가 달린 어떤 단어[^각주1]

[^각주1]: 각주 내용
```

### 결과

각주가 달린 어떤 단어[^각주1]

[^각주1]: 각주 내용

---

## 링크

### 문법
```
마크다운 문법: [Gatsby](https://www.gatsbyjs.org/)

자동 링크: https://www.gatsbyjs.org/

각주 문법을 이용한 링크: [Gatsby][1]

[1]: https://www.gatsbyjs.org
```

### 결과

마크다운 문법: [Gatsby](https://www.gatsbyjs.org/)

자동 링크: https://www.gatsbyjs.org/

각주 문법을 이용한 링크: [Gatsby][1]

[1]: https://www.gatsbyjs.org

---

## 인라인 코드

### 문법

```
여기에서 `greet()` 함수를 실행하였다.
```

### 결과

여기에서 `greet()` 함수를 실행하였다.

---

## 코드 블럭

### 문법

```
&#x60;``python
def greet(name):
    return 'Hello ' + name

greet('John')
&#x60;``
```

### 결과

```python
def greet(name):
    return 'Hello ' + name

greet('John')
```

## Youtube 영상 삽입

### 문법

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/k4V3Mo61fJM" frameborder="0" allowfullscreen></iframe>
```

### 결과

<iframe width="560" height="315" src="https://www.youtube.com/embed/k4V3Mo61fJM" frameborder="0" allowfullscreen></iframe>

---

## 에모지

### 문법

```
Thumbs Up: &#x3A;thumbsup&#x3A;
```

### 결과

Thumbs Up: :thumbsup:

[지원 하는 에모지 목록](https://github.com/matchilling/gatsby-remark-emojis/blob/master/emoji.md)

---

## 참고

* [github에서 사용하는 마크다운 문법](https://guides.github.com/features/mastering-markdown/)
