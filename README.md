# ๐ ๋ด์ผ์ ์ง
> CSS๋ฅผ ์ํ๊ณ  ์ถ์ด์ ๊ฒฐ์ ํ ๊ฐ์ (สฦช ห ยณห)  
> 
### [๊ฐ๋ฐ๋ฐฐ๊ฒฝ](https://github.com/DuetoPark/tomorrow-house/wiki/%EA%B0%9C%EB%B0%9C-%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/tomorrow-house/wiki)


### 1. GNB

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search" aria-hidden="true"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="./index.html"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart" aria-hidden="true"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="./index.html">๋ก๊ทธ์ธ</a>
    <a href="./index.html">ํ์๊ฐ์</a>
  </div>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search" aria-hidden="true"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="./index.html"
    aria-label="์คํฌ๋ฉ๋ถ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bookmark" aria-hidden="true"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="./index.html"
    aria-label="๋ด ์์ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bell" aria-hidden="true"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="./index.html"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart" aria-hidden="true"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="๋ง์ด๋ฉ๋ด ์ด๊ธฐ ๋ฒํผ"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="./index.html">๋ก๊ทธ์ธ</a>
  <a class="btn-primary btn-40" href="./index.html">ํ์๊ฐ์</a>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="sidebar-user">
  <a href="./index.html">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
    <strong class="user-name">์ฌ๋ธ๋ผ</strong>
  </a>
</div>

<div class="sidebar-user-menu">
  <ul class="user-menu-list">
    <li class="user-menu-item">
      <a href="./index.html">๋ง์ด ํ์ด์ง</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">๋์ ์ผํ</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">์คํฌ๋ฉ๋ถ</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">์๋ฆผ</a>
    </li>
    <li class="user-menu-item">
      <a href="./index.html">์ด๋ฒคํธ</a>
    </li>
  </ul>
</div>
```
