import elements from "@/data/common/elements";
import refreshHistory from "@/libs/functions/refreshHistory";

const { nodes } = elements;
!window.localStorage.getItem("app_history")
  ? nodes.readme.historyElement.html(
      '<h1 style="font-weight:normal;">暂无游戏记录</h1>'
    )
  : refreshHistory();
