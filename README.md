# 🛋 내일의 집
> CSS를 잘하고 싶어서 결제한 강의 (ʃƪ ˘ ³˘)  
> 
### [개발배경](https://github.com/DuetoPark/tomorrow-house/wiki/%EA%B0%9C%EB%B0%9C-%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/tomorrow-house/wiki)


### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search" aria-hidden="true"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="./index.html"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart" aria-hidden="true"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="./index.html">로그인</a>
    <a href="./index.html">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search" aria-hidden="true"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="./index.html"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark" aria-hidden="true"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="./index.html"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell" aria-hidden="true"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="./index.html"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart" aria-hidden="true"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="./index.html">로그인</a>
  <a class="btn-primary btn-40" href="./index.html">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="./index.html">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
    <strong class="user-name">사딸라</strong>
  </a>
</div>

<div class="sidebar-user-menu">
  <ul class="user-menu-list">
    <li class="user-menu-item">
      <a href="./index.html">마이 페이지</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">나의 쇼핑</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">스크랩북</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">알림</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">이벤트</a>
    </li>
  </ul>
</div>
```
