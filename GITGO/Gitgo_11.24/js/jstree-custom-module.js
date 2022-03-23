/**
 *
 * jstree 적용 모듈화
 *
 */
$(document).ready(function () {
  // 메인 대시보드 아이템 템플릿

  const paintMainElement = (id, name, team, position, email, phone) => {
    const item = `
    <div class="list_inner main_list_wrap">
      <div class="list_inner_box">
        <span class="inputCheck">
          <input type="checkbox" id="check_${id}" />
          <label for="check_${id}"></label>
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
          <p class="email tool-tip">hsjang.hello@gmail.com</p>
          <div class="phoneWrap">
            <p class="phone tool-tip">02-5106-5401</p>
            <p class="phone tool-tip">010-5106-5401</p>
          </div>
        </div>
      </div>
      <div class="list_inner_btns">
        <a href="#a" class="btn talk"></a>
        <a href="#a" class="btn sms"></a>
        <a href="#a" class="btn calendar"></a>
      </div>
    </div>
  `;
    return item;
  };

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
  const groupSelectOnIcon = "../images/group_select_on.svg";
  const groupSelectIcon = "../images/group_select.svg";

  // console.log("width : ", $(window).width());

  // jstree 노드 json 형태(메인)
  /* <<--------------------- 0617 수정 ----------------- */
  const jsonData = [
    {
      id: "node2",
      parent: "#",
      text: `
            <span class="tree_text tree_name">에쓰씨케이</span><span class="tree_text tree_count">[15]</span>
            <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll02" />
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3",
      parent: "node2",
      text: `<span class="tree_text tree_name">영업팀</span> <span class="tree_text tree_count">[7]</span>
          <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll03" />
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4",
      parent: "node3",
      text: `<span class="tree_text tree_name">영업 1부서</span> <span class="tree_text tree_count">[3]</span>
          <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll04" />
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1",
      parent: "node4",
      text: `<span class="tree_text tree_name">영업 1-1부서</span> <span class="tree_text tree_count">[3]</span>
          <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll04-1" />
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_2",
      parent: "node4",
      text: `<span class="tree_text tree_name">영업 1-2부서</span> <span class="tree_text tree_count">[5]</span>
          <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll04-2" />
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5",
      parent: "node3",
      text: `<span class="tree_text tree_name">영업 2부서</span> <span class="tree_text tree_count">[5]</span>
          <img class="groupCheckIcon" src=${groupSelectIcon} id="checkAll05" />
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "item4",
      parent: "node4",
      text: paintMainElement(1),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0; display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item5",
      parent: "node4",
      text: paintMainElement(2),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item6",
      parent: "node4",
      text: paintMainElement(3),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item7",
      parent: "node4",
      text: paintMainElement(4),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item8",
      parent: "node4",
      text: paintMainElement(5),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item9",
      parent: "node4",
      text: paintMainElement(6),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
    },
    {
      id: "item10",
      parent: "node4",
      text: paintMainElement(7),
      icon: false,
      a_attr: { style: "width:100%" },
      li_attr: {
        style: "margin-left: 0;display:inline-block;",
        class: "gnb-list-wrap main-leaf",
        "data-type": "User",
      },
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
            $(this).jstree(true).set_icon(jsonData[i], minusIcon);
          }
        }
      })
      .bind("select_node.jstree", function (e, data) {
        $("#jstree_main a.jstree-anchor .inputCheck").on("click", function (event) {
          event.stopPropagation();
        });

        $(".groupCheckIcon").on("click", function (event) {
          if ($("#" + event.target.id).hasClass("all_check")) {
            $("#" + event.target.id)
              .attr("src", groupSelectIcon)
              .removeClass("all_check");
          } else {
            $("#" + event.target.id)
              .attr("src", groupSelectOnIcon)
              .addClass("all_check");
          }
          event.stopImmediatePropagation();
        });
        // 체크박스
        $("#jstree_main .list_inner_box input[type='checkbox']")
          .off()
          .on("click", function () {
            if (this.checked) {
              this.checked = true;
            } else {
              this.checked = false;
            }
          });
        // 체크박스
        $("#jstree_main a.jstree-anchor .list_inner")
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
