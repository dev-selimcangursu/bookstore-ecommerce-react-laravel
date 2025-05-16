import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__left__area">
        <div className="categories__area">
          <label htmlFor="category-title">KATEGORİLER</label>
          <ul>
            <li>Edebiyat Kitapları</li>
            <li>Tarih Kitapları</li>
            <li>Hazırlık Kitapları</li>
            <li>Çocuk Kitapları</li>
            <li>Kırtasiye</li>
            <li>Oyuncak</li>
          </ul>
        </div>
        <div className="order__info__area">
          <label htmlFor="category-title">ÖNEMLİ BİLGİLER</label>
          <ul>
            <li>
              <a href="">Hakkımızda</a>
            </li>
            <li>
              <a href="">Kişisel Verilerin Korunması</a>
            </li>
            <li>
              <a href="">Teslimat Koşulları</a>
            </li>
            <li>
              <a href="">Satış Sözleşmesi</a>
            </li>
            <li>
              <a href="">Garanti ve İade Koşulları</a>
            </li>
          </ul>
        </div>
        <div className="order__info__area">
          <label htmlFor="category-title">HIZLI ERİŞİM</label>
          <ul>
            <li>
              <a href="">İletişim</a>
            </li>
            <li>
              <a href="">Mağazalarımız</a>
            </li>
            <li>
              <a href="">Yeni Çıkan Kitaplar</a>
            </li>
            <li>
              <a href="">Çok Satan Kitaplar</a>
            </li>
            <li>
              <a href="">İşlem Rehberi</a>
            </li>
          </ul>
        </div>
        <div className="order__info__area">
          <label htmlFor="category-title">ÜYE</label>
          <ul>
            <li>
              <a href="">Sıkça Sorulan Sorular</a>
            </li>
            <li>
              <a href="">Yeni Üyelik</a>
            </li>
            <li>
              <a href="">Üye Girişi</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__right">
        <div className="social__media__area">
          <a href="">
            {" "}
            <FaFacebook />
          </a>
          <a href="">
            {" "}
            <FaInstagram />
          </a>
          <a href="">
            {" "}
            <FaLinkedin />
          </a>
          <a href="">
            {" "}
            <FaGithub />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
        <p>Email Adresi : info@ebook.com</p>
        <p>Müşteri Hizmetleri : + 123 456 78 90</p>
        <div className="contracted__cards__area">
          <h4>Anlaşmalı Kartlar</h4>
          <div className="cards__list">
            <img
              src="https://cdn-icons-png.freepik.com/256/16174/16174294.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
              alt="Visa"
            />
            <img
              src="https://cdn-icons-png.freepik.com/256/14883/14883428.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
              alt="Mastercard"
            />
            <img
              src="https://cdn-icons-png.freepik.com/256/349/349228.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
              alt="American Express"
            />
            <img
              src="https://cdn-icons-png.freepik.com/256/922/922923.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
              alt="Troy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
