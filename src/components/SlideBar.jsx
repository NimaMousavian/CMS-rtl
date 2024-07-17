import React from "react";
import { IoHome } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const SlideBar = () => {
  return (
    <aside class="sidebar h-screen justify-start">
      <section class="sidebar-title items-center p-5 text-center">
        <div class="flex flex-col">
          <span>به داشبورد خود خوش آمدید</span>
        </div>
      </section>
      <section class="sidebar-content h-fit min-h-[20rem] overflow-visible p-0">
        <nav class="menu rounded-md">
          <section class="menu-section px-4">
            <span class="menu-title">منوی اصلی</span>
            <ul class="menu-items">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <IoHome />
                <span>صفحه ی اصلی</span>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <IoHome />
                <span>محصولات</span>
              </NavLink>

              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <FaUserGroup />
                <span>کاربران</span>
              </NavLink>
              <NavLink
                to="comments"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <FaComment />
                <span>نظرات</span>
              </NavLink>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <IoBag />
                <span>سفارشات</span>
              </NavLink>
              <NavLink
                to="discounts"
                className={({ isActive }) =>
                  isActive ? "menu-item menu-active" : "menu-item"
                }
              >
                <BiSolidDollarCircle className="text-lg" />
                <span>تخفیف ها</span>
              </NavLink>
              <li>
                <input type="checkbox" id="menu-1" class="menu-toggle" />
                <label class="menu-item justify-between" for="menu-1">
                  <div class="flex gap-2">
                    <FaUser />
                    <span>حساب</span>
                  </div>

                  <span class="menu-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <div class="menu-item-collapse">
                  <div class="min-h-0">
                    <label class="menu-item-disabled menu-item mr-6">
                      حساب ها
                    </label>
                    <label class="menu-item mr-6">مالی</label>
                    <label class="menu-item mr-6">امنیت</label>
                    <label class="menu-item mr-6">اعلان ها</label>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </nav>
      </section>
      <section class="sidebar-footer h-full justify-end bg-gray-2 pt-2">
        <div class="divider my-0"></div>
        <div class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
          <label
            class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
            tabindex="0"
          >
            <div class="flex flex-row gap-4 p-4">
              <div class="avatar avatar-md">
                <img src="/images/my-avatar.jpg" alt="avatar" />
              </div>

              <div class="flex flex-col">
                <span>نیما موسویان</span>
                <span class="text-xs font-normal text-content2">
                  برنامه نویس React
                </span>
              </div>
            </div>
          </label>
          <div class="dropdown-menu dropdown-menu-right-top ml-2">
            <a class="dropdown-item text-sm">پروفایل</a>
            <a tabindex="-1" class="dropdown-item text-sm">
              تنظیمات حساب
            </a>
            <a tabindex="-1" class="dropdown-item text-sm">
              تغییر ایمیل
            </a>

            <a tabindex="-1" class="dropdown-item text-sm">
              تغییر رمز ورود
            </a>

            <a tabindex="-1" class="dropdown-item text-sm">
              تنظیمات
            </a>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default SlideBar;
