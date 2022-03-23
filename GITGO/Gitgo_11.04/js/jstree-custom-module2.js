/**
 *
 * jstree 적용 모듈화
 *
 */
$(document).ready(function () {
  // 팝업 창 아이템 템플릿
  const paintPopupElement = (id, name, team, position) => {
    const item = `
    <div class="list_inner popup_list_wrap">
      <div class="list_inner_box popup_list_inner">
        <span class="inputCheck">
          <input type="checkbox" id="pop_check_${id}" />
          <label for="pop_check_${id}"></label>
        </span>
        <div class="profile_img">
          <img src="../images/thumb-icon-normal@2x.png" alt="profile-image" /><i class="status"></i>
        </div>
        <div class="profile_txt">
          <p class="name tool-tip">홍길동</p>
          <p class="belong">
            <span class="tool-tip belong_team">글로벌 프로모션 기획팀</span>
            <span class="tool-tip belong_team belong_position">ㅣ팀장</span>
          </p>
        </div>
      </div>
    </div>
  `;
    return item;
  };

  // 이미지 파일
  const plusIcon = "../images/i_gnb.svg";
  const minusIcon = "../images/i_gnb_on.svg";

  // console.log("width : ", $(window).width());

  // jstree 노드 json 형태(메인)
  /* <<--------------------- 0617 수정 ----------------- */
  const jsonData = [
    {
      id: "node2",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-1",
      parent: "node2",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-2",
      parent: "node2",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-3",
      parent: "node2",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-3-1",
      parent: "node2-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-3-2",
      parent: "node2-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-4",
      parent: "node2",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-4-1",
      parent: "node2-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2-4-2",
      parent: "node2-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 1</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-1",
      parent: "node3",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-2",
      parent: "node3",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-3",
      parent: "node3",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-3-1",
      parent: "node3-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-3-2",
      parent: "node3-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-4",
      parent: "node3",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-4-1",
      parent: "node3-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3-4-2",
      parent: "node3-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 2</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-1",
      parent: "node4",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-2",
      parent: "node4",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-3",
      parent: "node4",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-3-1",
      parent: "node4-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-3-2",
      parent: "node4-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-4",
      parent: "node4",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-4-1",
      parent: "node4-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4-4-2",
      parent: "node4-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 3</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-1",
      parent: "node5",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-2",
      parent: "node5",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-3",
      parent: "node5",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-3-1",
      parent: "node5-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-3-2",
      parent: "node5-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-4",
      parent: "node5",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-4-1",
      parent: "node5-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5-4-2",
      parent: "node5-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 4</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-1",
      parent: "node6",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-2",
      parent: "node6",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-3",
      parent: "node6",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-3-1",
      parent: "node6-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-3-2",
      parent: "node6-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-4",
      parent: "node6",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-4-1",
      parent: "node6-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6-4-2",
      parent: "node6-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
  ];

  // jstree 노드 json 형태(팝업)
  const jsonData_popup = [
    {
      id: "popup_item1",
      parent: "#",
      text: paintPopupElement(1),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item2",
      parent: "#",
      text: paintPopupElement(2),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item3",
      parent: "#",
      text: paintPopupElement(3),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item4",
      parent: "#",
      text: paintPopupElement(4),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item5",
      parent: "#",
      text: paintPopupElement(5),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item6",
      parent: "#",
      text: paintPopupElement(6),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
    {
      id: "popup_item7",
      parent: "#",
      text: paintPopupElement(7),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-bottom: 5px;display:inline-block;",
        class: "gnb-list-wrap popup-leaf",
        "data-type": "User",
      },
    },
  ];
  /* -------------------- 0617 수정 ---------------->> */

  $(function () {
    /**
     *
     *  팝업 안의 트리
     *
     * */
    $("#jstree_popup")
      .jstree({
        core: {
          data: jsonData_popup,
          themes: {
            icons: true,
          },
          check_callback: true,
          multiple: true,
        },

        types: {
          default: {
            icon: plusIcon,
          },
        },
        plugins: ["types"],
      })
      .bind("loaded.jstree", function (e, data) {
        for (let i = 0; i < jsonData.length; i++) {
          if ($(this).jstree(true).is_leaf(jsonData[i])) {
            // 자식이 없으면 true
            $(this).jstree(true).set_icon(jsonData[i], minusIcon);
          }
        }
        /* -------------------- 0630 수정 ---------------- */
        $(".popup_contents li.jstree-leaf").parent().addClass("list_area popup_area flex_list");
        /* -------------------- 0630 수정 ---------------- */

        $(".popup_contents li.jstree-leaf .list_inner").css("margin-top", "0px");
      })
      .bind("select_node.jstree", function (e, data) {
        $("#jstree_popup a.jstree-anchor .inputCheck").on("click", function (event) {
          event.stopPropagation();
        });

        // 체크박스
        $("#jstree_popup .list_inner_box.popup_list_inner input[type='checkbox']")
          .off()
          .on("click", function () {
            if (this.checked) {
              this.checked = true;
            } else {
              this.checked = false;
            }
          });
        // 아이템 클릭시 체크박스
        $("#jstree_popup a.jstree-anchor .list_inner")
          .off()
          .on("click", function (event) {
            const check = this.children[0].children[0].children[0];
            if (check.checked) {
              check.checked = false;
            } else {
              check.checked = true;
            }
          });
      })
      // 노드 open
      .bind("open_node.jstree", function (e, data) {
        $(this).jstree(true).set_icon(data.node, minusIcon);
        $("#" + data.node.id + " .gnb_inner").css("display", "block");
      })
      // 노드 close
      .bind("close_node.jstree", function (e, data) {
        $(this).jstree(true).set_icon(data.node, plusIcon);
        $("#" + data.node.id + " .gnb_inner").css("display", "none");
      });

    /**
     *
     *  대시보드의 트리
     *
     *  */
    $("#jstree_main")
      .jstree({
        core: {
          data: jsonData,
          themes: {
            icons: true,
          },
          check_callback: true,
          multiple: true,
        },

        types: {
          default: {
            icon: plusIcon,
          },
        },
        plugins: ["types"],
      })
      .bind("loaded.jstree", function (e, data) {
        for (let i = 0; i < jsonData.length; i++) {
          if ($(this).jstree(true).is_leaf(jsonData[i])) {
            // 자식이 없으면 true
            $(this).jstree(true).set_icon(jsonData[i], '');
          }
        }
      })
      .bind("select_node.jstree", function (e, data) {
        $("#jstree_main a.jstree-anchor .inputCheck").on("click", function (event) {
          event.stopPropagation();
        });


      })
      .bind("before_open.jstree", function (e, data) {
        const depth = $(this).jstree(true).get_path(".main-leaf.gnb-list-wrap").length;
        if (
          $("#" + data.node.id)
            .find("li")
            .hasClass("gnb-list-wrap")
        ) {
          $(".main-leaf.gnb-list-wrap")
            .parent()
            /* -------------------- 0630 수정 ---------------- */
            .addClass("list_area main_area flex_list")
            /* -------------------- 0630 수정 ---------------- */
            .css({
              /* -------------------- 0701 수정 ---------------- */
              //"margin-left": `calc(-24px * ${depth - 2})`,
              /* -------------------- 0701 수정 ---------------- */
              "white-space": "normal",
            });
          $(".main-leaf.gnb-list-wrap")
          /* -------------------- 0630 수정 ---------------- */
          .siblings('.jstree-node[data-type="Group"]')
          /* -------------------- 0630 수정 ---------------- */
            .css({

              /* -------------------- 0701 수정 ---------------- */
              //"margin-left": `calc(24px * ${depth - 1})`,
              /* -------------------- 0701 수정 ---------------- */

              width: "100%",
            });

          /* -------------------- 0701 수정 ---------------- */
          //$(".gnb-list-wrap.jstree-leaf").css("margin-bottom", "5px");
          $(".gnb-list-wrap.jstree-leaf").css("display","flex");
          /* -------------------- 0701 수정 ---------------- */

          $(".gnb-list-wrap.jstree-leaf i.jstree-icon").css("display", "none");
        }
      })
      .bind("hover_node.jstree", function (e, data) {
        $(".tool-tip").hover(function () {
          $(this).attr("title", $(this).text());
        });
      })
      // 노드 open
      .bind("open_node.jstree", function (e, data) {
        $(this).jstree(true).set_icon(data.node, minusIcon);
        $("#" + data.node.id + " .gnb_inner").css("display", "block");
      })
      // 노드 close
      .bind("close_node.jstree", function (e, data) {
        $(this).jstree(true).set_icon(data.node, plusIcon);
        $("#" + data.node.id + " .gnb_inner").css("display", "none");
      });
  });
});
