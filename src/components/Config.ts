import { userLogin } from '@/redux/auth';

class Config {
  $configPage: HTMLElement;
  data: any; // Todo 정의 필요
  dispatch: any; // Todo 정의 필요

  constructor($target: HTMLElement | null, props: any) {
    const $configPage = document.createElement('section');
    $configPage.classList.add('config');
    this.$configPage = $configPage;

    $target?.appendChild($configPage);

    this.data = props.data;
    this.dispatch = props.dispatch;

    this.render();
  }

  setState(nextState: any) {
    this.data = nextState;
    this.render();
  }

  render() {
    this.$configPage.innerHTML = /*html*/ `
      <section class="config__top">
        <div class="config__top__owner-container">
          <label for="config__owner-input">Owner</label>
          <input type="text" id="config__owner-input">
        </div>
        <div class="config__top__repo-container">
          <label for="config__repo-input">Repo Name</label>
          <input type="text" id="config__repo-input">
        </div>
        <div class="config__top__token-container">
          <label for="config__token-input">Token</label>
          <input type="text" id="config__token-input">
        </div>
      </section>
      <section class="config__bottom">
        <button class="config__bottom__check-btn">Check</button>
      </section>
    `;

    console.warn('===Start Login Feature===');

    this.dispatch(
      userLogin({
        repoName: '',
        owner: '',
        token: '',
      }),
    );

    console.warn('===End Login Feature===');
  }
}

export default Config;
