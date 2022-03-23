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
      id: "node2_1",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-1",
      parent: "node2_1",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-2",
      parent: "node2_1",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-3",
      parent: "node2_1",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-3-1",
      parent: "node2_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-3-2",
      parent: "node2_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-4",
      parent: "node2_1",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-4-1",
      parent: "node2_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node2_1-4-2",
      parent: "node2_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 1</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-1",
      parent: "node3_1",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-2",
      parent: "node3_1",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-3",
      parent: "node3_1",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-3-1",
      parent: "node3_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-3-2",
      parent: "node3_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-4",
      parent: "node3_1",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-4-1",
      parent: "node3_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node3_1-4-2",
      parent: "node3_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 2</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-1",
      parent: "node4_1",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-2",
      parent: "node4_1",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-3",
      parent: "node4_1",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-3-1",
      parent: "node4_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-3-2",
      parent: "node4_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-4",
      parent: "node4_1",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-4-1",
      parent: "node4_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node4_1-4-2",
      parent: "node4_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 3</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-1",
      parent: "node5_1",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-2",
      parent: "node5_1",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-3",
      parent: "node5_1",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-3-1",
      parent: "node5_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-3-2",
      parent: "node5_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-4",
      parent: "node5_1",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-4-1",
      parent: "node5_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node5_1-4-2",
      parent: "node5_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1",
      parent: "#",
      text: `
            <span class="tree_text1 tree_name">문서 양식 폴더 4</span>
          `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-1",
      parent: "node6_1",
      text: `<span class="tree_text tree_name">서식폴더 1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-2",
      parent: "node6_1",
      text: `<span class="tree_text tree_name">서식폴더 2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-3",
      parent: "node6_1",
      text: `<span class="tree_text tree_name">서식폴더 3</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-3-1",
      parent: "node6_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-3-2",
      parent: "node6_1-3",
      text: `<span class="tree_text tree_name">하위폴더3-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-4",
      parent: "node6_1",
      text: `<span class="tree_text tree_name">서식폴더 4</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-4-1",
      parent: "node6_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-1</span>
        `,
      li_attr: { "data-type": "Group" },
    },
    {
      id: "node6_1-4-2",
      parent: "node6_1-4",
      text: `<span class="tree_text tree_name">하위폴더4-2</span>
        `,
      li_attr: { "data-type": "Group" },
    },
  ];

  // jstree 노드 json 형태(팝업)
  const jsonData_popup = [
    {
      id: "popup_item1_1",
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
      id: "popup_item2_1",
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
      id: "popup_item3_1",
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
      id: "popup_item4_1",
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
      id: "popup_item5_1",
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
      id: "popup_item6_1",
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
      id: "popup_item7_1",
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
            console.log(event)
            const check = this.children[0].children[0].children[0];
            if (check.checked) {
              console.log(event,1)
              check.checked = false;
            } else {
              console.log(event,2)
              check.checked = true;
            }
          });

      })

      // 노드 open
      .bind("open_node.jstree", function (e, data) {
        console.log(123)
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
    $("#jstree_main1")
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
        $("#jstree_main1 a.jstree-anchor .inputCheck").on("click", function (event) {
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
      })

      // 토글 노드
      .bind('select_node.jstree', function (e, data) {
        const toggle = window.matchMedia('(max-width:760px)');
        console.log(toggle,'TOGGLE')
        if (toggle.matches) {
          console.log("asad")
          if (data.node.children.length === 0) {
            $('#jstree_main1').hide();
            $('.inner3-1 div').show();
          }
        }
      });

  });


  

});
