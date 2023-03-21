import React from 'react';

function Remark42() {
  return (
    <div>
      <div id="remark42"></div>
      <script>
        {`
          var remark_config = {
            host: 'wilsonchao.com', // 將其替換為您的域名
            site_id: 'wilsonchao-com', // 選擇一個唯一的 site_id，用於區分不同的站點
            url: 'wilsonchao.com' + window.location.pathname, // 確保每個頁面都有唯一的 URL
            components: ['embed'], // 啟用評論組件
          };
          (function (c) {
            for (var i = 0; i < c.length; i++) {
              var d = document,
                s = d.createElement('script');
              s.src = remark_config.host + '/web/' + c[i] + '.js';
              s.defer = true;
              (d.head || d.body).appendChild(s);
            }
          })(remark_config.components || ['embed']);
        `}
      </script>
    </div>
  );
}

export default Remark42;
